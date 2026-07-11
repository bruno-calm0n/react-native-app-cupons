import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import {
  formatFlashCouponTimeLeft,
  getCouponAvailability,
  isFlashCouponActive,
} from '../../utils/couponStatus';
import { formatDiscount } from '../../utils/formatters';
import { IconBadge } from '../IconBadge';
import {
  BadgesRow,
  Container,
  Content,
  Discount,
  DiscountBox,
  FlashBadge,
  FlashText,
  StatusBadge,
  StatusText,
  Store,
  Title,
} from './styles';

type CouponCardProps = {
  coupon: Coupon;
  now?: Date;
  onPress: () => void;
};

export function CouponCard({
  coupon,
  now = new Date(),
  onPress,
}: CouponCardProps) {
  const theme = useTheme();
  const availability = getCouponAvailability(coupon, now);
  const isActiveFlashCoupon = isFlashCouponActive(coupon, now);
  const flashTimeLeft = formatFlashCouponTimeLeft(coupon, now);
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
        {isActiveFlashCoupon || statusLabel ? (
          <BadgesRow>
            {isActiveFlashCoupon ? (
              <FlashBadge>
                <FlashText numberOfLines={1}>
                  Relâmpago · {flashTimeLeft}
                </FlashText>
              </FlashBadge>
            ) : null}

            {statusLabel ? (
              <StatusBadge $availability={availability}>
                <StatusText $availability={availability}>{statusLabel}</StatusText>
              </StatusBadge>
            ) : null}
          </BadgesRow>
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
