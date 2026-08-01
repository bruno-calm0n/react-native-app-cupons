export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Coupons: undefined;
  Profile: undefined;
  PersonalData: undefined;
  UnavailableCoupons: undefined;
  StoreProfile: {
    storeId: string;
  };
  CouponDetail: {
    couponId: string;
  };
  CouponCode: {
    couponId: string;
  };
};
