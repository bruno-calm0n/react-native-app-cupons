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
  description: string;
  rules: string[];
};
