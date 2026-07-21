import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import { getCouponAvailability } from '../../utils/couponStatus';
import {
  formatCurrencyBR,
  formatDateBR,
  formatDiscount,
  getDiscountedPrice,
} from '../../utils/formatters';
import { IconBadge } from '../IconBadge';
import {
  Container,
  CouponInfo,
  DateText,
  Discount,
  DiscountBox,
  Divider,
  DiscountedPrice,
  MetricColumn,
  MetricLabel,
  MetricsRow,
  OriginalPrice,
  StatusBadge,
  StatusText,
  Store,
  StorePhoto,
  Title,
  TopRow,
} from './styles';

type CouponSummaryCardProps = {
  coupon: Coupon;
};

export function CouponSummaryCard({ coupon }: CouponSummaryCardProps) {
  const theme = useTheme();
  const availability = getCouponAvailability(coupon);
  const statusLabel = {
    available: '',
    expiringSoon: 'Expira em breve',
    expired: 'Expirado',
    used: 'Usado',
  }[availability];
  const originalPrice = coupon.originalPrice;
  const hasPrice = typeof originalPrice === 'number';
  const discountedPrice = hasPrice
    ? coupon.discountedPrice ??
      getDiscountedPrice(originalPrice, coupon.discountPercentage)
    : null;

  return (
    <Container>
      <TopRow>
        {coupon.storeImageUrl ? (
          <StorePhoto
            accessibilityLabel={`Foto do estabelecimento ${coupon.store}`}
            source={{ uri: coupon.storeImageUrl }}
          />
        ) : (
          <IconBadge size="lg">
            <Tag color={theme.colors.primary} size={28} strokeWidth={1.8} />
          </IconBadge>
        )}

        <CouponInfo>
          <Title numberOfLines={1}>{coupon.title}</Title>
          <Store numberOfLines={1}>{coupon.store}</Store>
          {statusLabel ? (
            <StatusBadge $availability={availability}>
              <StatusText $availability={availability}>{statusLabel}</StatusText>
            </StatusBadge>
          ) : null}
        </CouponInfo>
      </TopRow>

      <Divider />

      <MetricsRow>
        <MetricColumn>
          <MetricLabel>{' '}</MetricLabel>
          <DiscountBox $availability={availability}>
            <Discount $availability={availability}>
              {formatDiscount(coupon.discountPercentage)}
            </Discount>

            {hasPrice && discountedPrice !== null ? (
              <>
                <OriginalPrice numberOfLines={1}>
                  {formatCurrencyBR(originalPrice)}
                </OriginalPrice>
                <DiscountedPrice $availability={availability} numberOfLines={1}>
                  {formatCurrencyBR(discountedPrice)}
                </DiscountedPrice>
              </>
            ) : null}
          </DiscountBox>
        </MetricColumn>

        <MetricColumn>
          <MetricLabel>Válido até</MetricLabel>
          <DateText>{formatDateBR(coupon.validUntil)}</DateText>
        </MetricColumn>
      </MetricsRow>
    </Container>
  );
}
