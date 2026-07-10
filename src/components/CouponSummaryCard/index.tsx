import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import { formatDateBR, formatDiscount } from '../../utils/formatters';
import { IconBadge } from '../IconBadge';
import {
  Container,
  CouponInfo,
  DateText,
  Discount,
  DiscountBox,
  Divider,
  MetricColumn,
  MetricLabel,
  MetricsRow,
  Store,
  Title,
  TopRow,
  VerticalDivider,
} from './styles';

type CouponSummaryCardProps = {
  coupon: Coupon;
};

export function CouponSummaryCard({ coupon }: CouponSummaryCardProps) {
  const theme = useTheme();

  return (
    <Container>
      <TopRow>
        <IconBadge size="lg">
          <Tag color={theme.colors.primary} size={28} strokeWidth={1.8} />
        </IconBadge>

        <CouponInfo>
          <Title numberOfLines={1}>{coupon.title}</Title>
          <Store numberOfLines={1}>{coupon.store}</Store>
        </CouponInfo>
      </TopRow>

      <Divider />

      <MetricsRow>
        <MetricColumn>
          <MetricLabel>Desconto</MetricLabel>
          <DiscountBox>
            <Discount>{formatDiscount(coupon.discountPercentage)}</Discount>
          </DiscountBox>
        </MetricColumn>

        <VerticalDivider />

        <MetricColumn>
          <MetricLabel>Válido até</MetricLabel>
          <DateText>{formatDateBR(coupon.validUntil)}</DateText>
        </MetricColumn>
      </MetricsRow>
    </Container>
  );
}
