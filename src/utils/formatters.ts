export function formatDiscount(value: number) {
  return `${value}%`;
}

export function formatDateBR(date: string) {
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
}
