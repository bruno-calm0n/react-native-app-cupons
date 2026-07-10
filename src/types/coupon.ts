export type Coupon = {
  id: string;
  title: string;
  store: string;
  discountPercentage: number;
  validUntil: string;
  description: string;
  rules: string[];
};
