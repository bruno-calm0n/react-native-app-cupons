export function formatDiscount(value: number) {
  return `${value}%`;
}

export function formatDateBR(date: string) {
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
}

export function formatCurrencyBR(value: number) {
  const [integerPart, decimalPart] = value.toFixed(2).split('.');
  const integerWithThousands = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  );

  return `R$ ${integerWithThousands},${decimalPart}`;
}

export function getDiscountedPrice(
  originalPrice: number,
  discountPercentage: number,
) {
  const discountMultiplier = 1 - discountPercentage / 100;

  return Number((originalPrice * discountMultiplier).toFixed(2));
}
