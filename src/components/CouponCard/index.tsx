import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import { formatDiscount } from '../../utils/formatters';
import { IconBadge } from '../IconBadge';
import { Container, Content, Discount, DiscountBox, Store, Title } from './styles';

type CouponCardProps = {
  coupon: Coupon;
  onPress: () => void;
};

export function CouponCard({ coupon, onPress }: CouponCardProps) {
  const theme = useTheme();

  return (
    <Container activeOpacity={0.82} onPress={onPress}>
      <IconBadge size="lg">
        <Tag color={theme.colors.primary} size={28} strokeWidth={1.8} />
      </IconBadge>

      <Content>
        <Title numberOfLines={1}>{coupon.title}</Title>
        <Store numberOfLines={1}>{coupon.store}</Store>
      </Content>

      <DiscountBox>
        <Discount>{formatDiscount(coupon.discountPercentage)}</Discount>
      </DiscountBox>
    </Container>
  );
}
