import { Linking, Share } from 'react-native';

import type { Coupon } from '../types/coupon';
import { formatDateBR, formatDiscount } from './formatters';

export function getCouponShareMessage(coupon: Coupon) {
  return [
    `${coupon.title} - ${coupon.store}`,
    `Código: ${coupon.redeemCode}`,
    `Desconto: ${formatDiscount(coupon.discountPercentage)}`,
    `Válido até: ${formatDateBR(coupon.validUntil)}`,
  ].join('\n');
}

export async function shareCouponViaWhatsApp(coupon: Coupon) {
  const message = getCouponShareMessage(coupon);
  const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

  if (await Linking.canOpenURL(whatsappUrl)) {
    await Linking.openURL(whatsappUrl);
    return;
  }

  await Share.share({ message });
}
