export function getCustomerInitials(name?: string) {
  const fallbackInitials = 'CL';
  const normalizedName = name?.trim();

  if (!normalizedName) {
    return fallbackInitials;
  }

  const initials = normalizedName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0])
    .join('')
    .toUpperCase();

  return initials || fallbackInitials;
}
