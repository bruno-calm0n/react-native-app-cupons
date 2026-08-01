import { useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FileText, ShieldCheck } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../../components/AppButton';
import { CouponSummaryCard } from '../../components/CouponSummaryCard';
import { CouponUseOptionsDialog } from '../../components/CouponUseOptionsDialog';
import { InfoSection } from '../../components/InfoSection';
import { ScreenHeader } from '../../components/ScreenHeader';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import {
  canUseCoupon,
  getCouponAvailability,
} from '../../utils/couponStatus';
import { shareCouponViaWhatsApp } from '../../utils/couponShare';
import {
  ActionWrapper,
  Bullet,
  Content,
  DescriptionText,
  RuleRow,
  RuleText,
  SafeArea,
} from './styles';

type CouponDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CouponDetail'
>;

export function CouponDetailScreen({
  navigation,
  route,
}: CouponDetailScreenProps) {
  const theme = useTheme();
  const [isUseOptionsVisible, setIsUseOptionsVisible] = useState(false);

  const coupon = useMemo(
    () =>
      coupons.find((currentCoupon) => currentCoupon.id === route.params.couponId) ??
      coupons[0],
    [route.params.couponId],
  );
  const availability = getCouponAvailability(coupon);
  const canUseCurrentCoupon = canUseCoupon(coupon);
  const isUnavailable = availability === 'used' || availability === 'expired';

  function handlePresentCode() {
    setIsUseOptionsVisible(false);
    navigation.navigate('CouponCode', {
      couponId: coupon.id,
    });
  }

  async function handleShareViaWhatsApp() {
    await shareCouponViaWhatsApp(coupon);
    setIsUseOptionsVisible(false);
  }

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Content>
        <ScreenHeader
          onBack={() => navigation.goBack()}
          title="Detalhe do cupom"
        />

        <CouponSummaryCard
          coupon={coupon}
          onStorePress={() =>
            navigation.navigate('StoreProfile', {
              storeId: coupon.storeId,
            })
          }
          showValidity={!isUnavailable}
        />

        <InfoSection
          icon={
            <FileText color={theme.colors.primary} size={28} strokeWidth={1.7} />
          }
          title="Descrição"
        >
          <DescriptionText>{coupon.description}</DescriptionText>
        </InfoSection>

        <InfoSection
          icon={
            <ShieldCheck
              color={theme.colors.primary}
              size={28}
              strokeWidth={1.7}
            />
          }
          title="Regras"
        >
          {coupon.rules.map((rule) => (
            <RuleRow key={rule}>
              <Bullet>{'\u2022'}</Bullet>
              <RuleText>{rule}</RuleText>
            </RuleRow>
          ))}
        </InfoSection>

        {canUseCurrentCoupon ? (
          <ActionWrapper>
            <AppButton
              onPress={() => setIsUseOptionsVisible(true)}
              title="Usar cupom"
            />
          </ActionWrapper>
        ) : null}

        <CouponUseOptionsDialog
          onClose={() => setIsUseOptionsVisible(false)}
          onPresentCode={handlePresentCode}
          onShareViaWhatsApp={handleShareViaWhatsApp}
          visible={isUseOptionsVisible}
        />
      </Content>
    </SafeArea>
  );
}
