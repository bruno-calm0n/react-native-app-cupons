import type { Coupon, CouponAvailability } from '../types/coupon';

const expirationWindowInDays = 7;
const dayInMilliseconds = 24 * 60 * 60 * 1000;
const secondInMilliseconds = 1000;

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseLocalDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);

  return new Date(year, month - 1, day);
}

export function getDaysUntilExpiration(
  validUntil: string,
  currentDate = new Date(),
) {
  const today = startOfDay(currentDate);
  const expirationDate = startOfDay(parseLocalDate(validUntil));
  const difference = expirationDate.getTime() - today.getTime();

  return Math.ceil(difference / dayInMilliseconds);
}

export function isCouponExpired(validUntil: string, currentDate = new Date()) {
  return getDaysUntilExpiration(validUntil, currentDate) < 0;
}

export function isCouponExpiringSoon(
  validUntil: string,
  currentDate = new Date(),
) {
  const daysUntilExpiration = getDaysUntilExpiration(validUntil, currentDate);

  return (
    daysUntilExpiration >= 0 && daysUntilExpiration <= expirationWindowInDays
  );
}

export function getFlashCouponTimeLeftInMilliseconds(
  coupon: Coupon,
  currentDate = new Date(),
) {
  if (!coupon.isFlash || !coupon.flashExpiresAt) {
    return 0;
  }

  const expirationDate = new Date(coupon.flashExpiresAt);
  const expirationTime = expirationDate.getTime();

  if (Number.isNaN(expirationTime)) {
    return 0;
  }

  return Math.max(expirationTime - currentDate.getTime(), 0);
}

export function isFlashCouponExpired(coupon: Coupon, currentDate = new Date()) {
  return (
    Boolean(coupon.isFlash && coupon.flashExpiresAt) &&
    getFlashCouponTimeLeftInMilliseconds(coupon, currentDate) <= 0
  );
}

export function getCouponAvailability(
  coupon: Coupon,
  currentDate = new Date(),
): CouponAvailability {
  if (coupon.status === 'used') {
    return 'used';
  }

  if (
    coupon.status === 'expired' ||
    isCouponExpired(coupon.validUntil, currentDate) ||
    isFlashCouponExpired(coupon, currentDate)
  ) {
    return 'expired';
  }

  if (isCouponExpiringSoon(coupon.validUntil, currentDate)) {
    return 'expiringSoon';
  }

  return 'available';
}

export function canUseCoupon(coupon: Coupon, currentDate = new Date()) {
  const availability = getCouponAvailability(coupon, currentDate);

  return availability === 'available' || availability === 'expiringSoon';
}

export function isFlashCouponActive(coupon: Coupon, currentDate = new Date()) {
  return (
    Boolean(coupon.isFlash && coupon.flashExpiresAt) &&
    canUseCoupon(coupon, currentDate) &&
    getFlashCouponTimeLeftInMilliseconds(coupon, currentDate) > 0
  );
}

export function formatFlashCouponTimeLeft(
  coupon: Coupon,
  currentDate = new Date(),
) {
  const timeLeft = getFlashCouponTimeLeftInMilliseconds(coupon, currentDate);

  if (timeLeft <= 0) {
    return '00:00:00';
  }

  const totalSeconds = Math.floor(timeLeft / secondInMilliseconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${hours}:${paddedMinutes}:${paddedSeconds}`;
}

export function getCouponBlockedMessage(
  coupon: Coupon,
  currentDate = new Date(),
) {
  const availability = getCouponAvailability(coupon, currentDate);

  if (availability === 'used') {
    return 'Este cupom já foi usado.';
  }

  if (availability === 'expired') {
    return 'Este cupom expirou.';
  }

  return '';
}
