export type CouponStatus = 'available' | 'used' | 'expired';

export type CouponAvailability = CouponStatus | 'expiringSoon';

export type Coupon = {
  id: string;
  title: string;
  store: string;
  discountPercentage: number;
  validUntil: string;
  status: CouponStatus;
  redeemCode: string;
  isFlash?: boolean;
  flashExpiresAt?: string;
  originalPrice?: number;
  discountedPrice?: number;
  storeImageUrl?: string;
  productImageUrl?: string;
  description: string;
  rules: string[];
};
