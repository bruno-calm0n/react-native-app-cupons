import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import { getCouponAvailability } from '../../utils/couponStatus';
import { formatDiscount } from '../../utils/formatters';
import { IconBadge } from '../IconBadge';
import {
  Container,
  Content,
  Discount,
  DiscountBox,
  StatusBadge,
  StatusText,
  Store,
  Title,
} from './styles';

type CouponCardProps = {
  coupon: Coupon;
  onPress: () => void;
};

export function CouponCard({ coupon, onPress }: CouponCardProps) {
  const theme = useTheme();
  const availability = getCouponAvailability(coupon);
  const statusLabel = {
    available: '',
    expiringSoon: 'Expira em breve',
    expired: 'Expirado',
    used: 'Usado',
  }[availability];

  return (
    <Container
      activeOpacity={0.82}
      $availability={availability}
      onPress={onPress}
    >
      <IconBadge size="lg">
        <Tag color={theme.colors.primary} size={28} strokeWidth={1.8} />
      </IconBadge>

      <Content>
        <Title numberOfLines={1}>{coupon.title}</Title>
        <Store numberOfLines={1}>{coupon.store}</Store>
        {statusLabel ? (
          <StatusBadge $availability={availability}>
            <StatusText $availability={availability}>{statusLabel}</StatusText>
          </StatusBadge>
        ) : null}
      </Content>

      <DiscountBox $availability={availability}>
        <Discount $availability={availability}>
          {formatDiscount(coupon.discountPercentage)}
        </Discount>
      </DiscountBox>
    </Container>
  );
}
