import { Tag } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { Coupon } from '../../types/coupon';
import {
  formatFlashCouponTimeLeft,
  getCouponAvailability,
  isFlashCouponActive,
} from '../../utils/couponStatus';
import {
  formatCurrencyBR,
  formatDiscount,
  getDiscountedPrice,
} from '../../utils/formatters';
import {
  BadgesRow,
  Container,
  Content,
  CurrentPrice,
  Discount,
  DiscountBox,
  FlashBadge,
  FlashText,
  MediaWrapper,
  OriginalPrice,
  PriceBlock,
  ProductFallback,
  ProductImage,
  StoreFallback,
  StoreInitial,
  StoreLogo,
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
  const originalPrice = coupon.originalPrice;
  const hasPrice = typeof originalPrice === 'number';
  const discountedPrice = hasPrice
    ? coupon.discountedPrice ??
      getDiscountedPrice(originalPrice, coupon.discountPercentage)
    : null;
  const storeInitial = coupon.store.trim().charAt(0).toUpperCase();
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
      <MediaWrapper>
        {coupon.productImageUrl ? (
          <ProductImage
            accessibilityLabel={`Imagem do cupom ${coupon.title}`}
            source={{ uri: coupon.productImageUrl }}
          />
        ) : (
          <ProductFallback>
            <Tag color={theme.colors.primary} size={28} strokeWidth={1.8} />
          </ProductFallback>
        )}

        {coupon.storeImageUrl ? (
          <StoreLogo
            accessibilityLabel={`Imagem da loja ${coupon.store}`}
            source={{ uri: coupon.storeImageUrl }}
          />
        ) : (
          <StoreFallback>
            <StoreInitial>{storeInitial}</StoreInitial>
          </StoreFallback>
        )}
      </MediaWrapper>

      <Content>
        <Title numberOfLines={1}>{coupon.title}</Title>
        <Store numberOfLines={1}>{coupon.store}</Store>

        {hasPrice && discountedPrice !== null ? (
          <PriceBlock>
            <OriginalPrice numberOfLines={1}>
              {formatCurrencyBR(originalPrice)}
            </OriginalPrice>
            <CurrentPrice $availability={availability} numberOfLines={1}>
              {formatCurrencyBR(discountedPrice)}
            </CurrentPrice>
          </PriceBlock>
        ) : null}

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
