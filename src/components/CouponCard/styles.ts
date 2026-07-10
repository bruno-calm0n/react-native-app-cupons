import styled from 'styled-components/native';

import type { CouponAvailability } from '../../types/coupon';

type AvailabilityProps = {
  $availability: CouponAvailability;
};

function getStatusColor(
  availability: CouponAvailability,
  theme: import('styled-components/native').DefaultTheme,
) {
  if (availability === 'expired') {
    return theme.colors.danger;
  }

  if (availability === 'used') {
    return theme.colors.textMuted;
  }

  if (availability === 'expiringSoon') {
    return theme.colors.warning;
  }

  return theme.colors.primary;
}

export const Container = styled.TouchableOpacity<AvailabilityProps>`
  min-height: 96px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.06;
  shadow-radius: 10px;
  shadow-offset: 0px 5px;
  elevation: 2;
  opacity: ${({ $availability }) =>
    $availability === 'expired' || $availability === 'used' ? 0.72 : 1};
`;

export const Content = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.lg}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const Store = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
`;

export const StatusBadge = styled.View<AvailabilityProps>`
  align-self: flex-start;
  border-radius: ${({ theme }) => theme.radii.pill}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme, $availability }) =>
    getStatusColor($availability, theme)};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme }) => theme.spacing.sm}px;
`;

export const StatusText = styled.Text<AvailabilityProps>`
  color: ${({ theme, $availability }) => getStatusColor($availability, theme)};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const DiscountBox = styled.View<AvailabilityProps>`
  min-width: 72px;
  min-height: 44px;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme, $availability }) =>
    getStatusColor($availability, theme)};
  background-color: ${({ theme, $availability }) =>
    $availability === 'available' || $availability === 'expiringSoon'
      ? theme.colors.surfaceStrong
      : theme.colors.surfaceMuted};
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
`;

export const Discount = styled.Text<AvailabilityProps>`
  color: ${({ theme, $availability }) => getStatusColor($availability, theme)};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;
