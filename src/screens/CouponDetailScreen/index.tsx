import { useMemo } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CalendarDays, FileText, ShieldCheck } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { CouponSummaryCard } from '../../components/CouponSummaryCard';
import { InfoSection } from '../../components/InfoSection';
import { ScreenHeader } from '../../components/ScreenHeader';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import { formatDateBR } from '../../utils/formatters';
import {
  Bullet,
  Content,
  DescriptionText,
  RuleRow,
  RuleText,
  SafeArea,
  ValidityText,
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

  const coupon = useMemo(
    () =>
      coupons.find((currentCoupon) => currentCoupon.id === route.params.couponId) ??
      coupons[0],
    [route.params.couponId],
  );

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Content>
        <ScreenHeader
          onBack={() => navigation.goBack()}
          title="Detalhe do cupom"
        />

        <CouponSummaryCard coupon={coupon} />

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

        <InfoSection
          icon={
            <CalendarDays
              color={theme.colors.primary}
              size={28}
              strokeWidth={1.7}
            />
          }
          title="Validade"
        >
          <ValidityText>Válido até {formatDateBR(coupon.validUntil)}</ValidityText>
        </InfoSection>
      </Content>
    </SafeArea>
  );
}
