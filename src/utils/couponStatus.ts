import type { Coupon, CouponAvailability } from '../types/coupon';

const expirationWindowInDays = 7;
const dayInMilliseconds = 24 * 60 * 60 * 1000;

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseLocalDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);

  return new Date(year, month - 1, day);
}

export function getDaysUntilExpiration(validUntil: string) {
  const today = startOfDay(new Date());
  const expirationDate = startOfDay(parseLocalDate(validUntil));
  const difference = expirationDate.getTime() - today.getTime();

  return Math.ceil(difference / dayInMilliseconds);
}

export function isCouponExpired(validUntil: string) {
  return getDaysUntilExpiration(validUntil) < 0;
}

export function isCouponExpiringSoon(validUntil: string) {
  const daysUntilExpiration = getDaysUntilExpiration(validUntil);

  return (
    daysUntilExpiration >= 0 && daysUntilExpiration <= expirationWindowInDays
  );
}

export function getCouponAvailability(coupon: Coupon): CouponAvailability {
  if (coupon.status === 'used') {
    return 'used';
  }

  if (coupon.status === 'expired' || isCouponExpired(coupon.validUntil)) {
    return 'expired';
  }

  if (isCouponExpiringSoon(coupon.validUntil)) {
    return 'expiringSoon';
  }

  return 'available';
}

export function canUseCoupon(coupon: Coupon) {
  const availability = getCouponAvailability(coupon);

  return availability === 'available' || availability === 'expiringSoon';
}

export function getCouponBlockedMessage(coupon: Coupon) {
  const availability = getCouponAvailability(coupon);

  if (availability === 'used') {
    return 'Este cupom já foi usado.';
  }

  if (availability === 'expired') {
    return 'Este cupom expirou.';
  }

  return '';
}
