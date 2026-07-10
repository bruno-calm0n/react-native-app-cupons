import styled from 'styled-components/native';

type FilterChipStyleProps = {
  $selected: boolean;
};

export const Container = styled.Pressable<FilterChipStyleProps>`
  min-height: 36px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.pill}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary : theme.colors.surface};
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.lg}px;
`;

export const Label = styled.Text<FilterChipStyleProps>`
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
`;
