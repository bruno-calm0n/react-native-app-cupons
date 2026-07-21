import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing.xl}px;
  right: ${({ theme }) => theme.spacing.xl}px;
  bottom: ${({ theme }) => theme.spacing.xl}px;
  z-index: 20;
  border-left-width: 4px;
  border-left-color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.radii.lg}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg}px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.1;
  shadow-radius: 14px;
  shadow-offset: 0px 8px;
  elevation: 4;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;
