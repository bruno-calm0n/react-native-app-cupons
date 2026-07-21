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

export const Container = styled.View`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.06;
  shadow-radius: 12px;
  shadow-offset: 0px 6px;
  elevation: 2;
`;

export const TopRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StorePhoto = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const CouponInfo = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.lg}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const Store = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
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
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const Divider = styled.View`
  height: ${({ theme }) => theme.borderWidths.regular}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;

export const MetricsRow = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.lg}px;
`;

export const MetricColumn = styled.View`
  flex: 1;
  align-items: center;
`;

export const MetricLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const DiscountBox = styled.View<AvailabilityProps>`
  min-width: 132px;
  min-height: 96px;
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
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
`;

export const Discount = styled.Text<AvailabilityProps>`
  color: ${({ theme, $availability }) => getStatusColor($availability, theme)};
  font-size: ${({ theme }) => theme.typography.sizes.xxl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const OriginalPrice = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  text-decoration-line: line-through;
`;

export const DiscountedPrice = styled.Text<AvailabilityProps>`
  color: ${({ theme, $availability }) =>
    $availability === 'expired' || $availability === 'used'
      ? theme.colors.textMuted
      : theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;
