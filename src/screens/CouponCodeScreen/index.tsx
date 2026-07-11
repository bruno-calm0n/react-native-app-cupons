import { useMemo } from 'react';
import { Linking, Share } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BadgePercent, Share2, Ticket } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { InfoSection } from '../../components/InfoSection';
import { ScreenHeader } from '../../components/ScreenHeader';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import {
  getCouponAvailability,
  getCouponBlockedMessage,
} from '../../utils/couponStatus';
import { formatDateBR, formatDiscount } from '../../utils/formatters';
import {
  ActionStack,
  CodeBox,
  CodeLabel,
  CodeText,
  Content,
  CouponName,
  InfoText,
  Instruction,
  MainCardWrapper,
  SafeArea,
  Screen,
  StoreName,
  UnavailableBox,
  UnavailableDescription,
  UnavailableTitle,
} from './styles';

type CouponCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CouponCode'
>;

export function CouponCodeScreen({
  navigation,
  route,
}: CouponCodeScreenProps) {
  const theme = useTheme();

  const coupon = useMemo(
    () =>
      coupons.find((currentCoupon) => currentCoupon.id === route.params.couponId),
    [route.params.couponId],
  );

  if (!coupon) {
    return (
      <Screen>
        <SafeArea edges={['top', 'bottom']}>
          <Content>
            <ScreenHeader
              onBack={() => navigation.goBack()}
              title="Código do cupom"
            />

            <MainCardWrapper>
              <AppCard>
                <UnavailableTitle>Cupom não encontrado</UnavailableTitle>
                <UnavailableDescription>
                  Não foi possível localizar este cupom. Volte para a lista e
                  tente novamente.
                </UnavailableDescription>
              </AppCard>
            </MainCardWrapper>

            <ActionStack>
              <AppButton
                onPress={() => navigation.navigate('Coupons')}
                title="Voltar para cupons"
                variant="secondary"
              />
            </ActionStack>
          </Content>
        </SafeArea>
      </Screen>
    );
  }

  const selectedCoupon = coupon;

  const availability = getCouponAvailability(selectedCoupon);
  const canShowCode =
    availability === 'available' || availability === 'expiringSoon';
  const unavailableMessage = getCouponBlockedMessage(selectedCoupon);

  async function handleShareCouponCode() {
    const message = [
      `${selectedCoupon.title} - ${selectedCoupon.store}`,
      `Código: ${selectedCoupon.redeemCode}`,
      `Desconto: ${formatDiscount(selectedCoupon.discountPercentage)}`,
      `Válido até: ${formatDateBR(selectedCoupon.validUntil)}`,
    ].join('\n');
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

    if (await Linking.canOpenURL(whatsappUrl)) {
      await Linking.openURL(whatsappUrl);
      return;
    }

    await Share.share({ message });
  }

  return (
    <Screen>
      <SafeArea edges={['top', 'bottom']}>
        <Content>
          <ScreenHeader
            onBack={() => navigation.goBack()}
            title="Código do cupom"
          />

          <MainCardWrapper>
            <AppCard>
              <CouponName>{selectedCoupon.title}</CouponName>
              <StoreName>{selectedCoupon.store}</StoreName>

              {canShowCode ? (
                <>
                  <Instruction>
                    Apresente este código no estabelecimento para usar seu
                    benefício.
                  </Instruction>

                  <CodeBox>
                    <CodeLabel>Código do cupom</CodeLabel>
                    <CodeText>{selectedCoupon.redeemCode}</CodeText>
                  </CodeBox>
                </>
              ) : (
                <UnavailableBox>
                  <UnavailableTitle>
                    {availability === 'expired'
                      ? 'Cupom expirado'
                      : 'Cupom já usado'}
                  </UnavailableTitle>
                  <UnavailableDescription>{unavailableMessage}</UnavailableDescription>
                </UnavailableBox>
              )}
            </AppCard>
          </MainCardWrapper>

          <InfoSection
            icon={
              <BadgePercent
                color={theme.colors.primary}
                size={28}
                strokeWidth={1.7}
              />
            }
            title="Benefício"
          >
            <InfoText>
              {formatDiscount(selectedCoupon.discountPercentage)} de desconto.
              Válido até {formatDateBR(selectedCoupon.validUntil)}.
            </InfoText>
          </InfoSection>

          <InfoSection
            icon={<Ticket color={theme.colors.primary} size={28} strokeWidth={1.7} />}
            title="Como usar"
          >
            <InfoText>
              Mostre o código no atendimento antes de finalizar a compra.
            </InfoText>
          </InfoSection>

          <ActionStack>
            {canShowCode ? (
              <AppButton
                icon={
                  <Share2
                    color={theme.colors.primary}
                    size={20}
                    strokeWidth={1.9}
                  />
                }
                onPress={handleShareCouponCode}
                title="Compartilhar no WhatsApp"
                variant="secondary"
              />
            ) : null}

            <AppButton
              onPress={() => navigation.navigate('Coupons')}
              title="Voltar para cupons"
              variant="secondary"
            />
          </ActionStack>
        </Content>
      </SafeArea>
    </Screen>
  );
}
