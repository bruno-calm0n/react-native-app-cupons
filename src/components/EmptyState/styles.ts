import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.md}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xxl}px
    ${({ theme }) => theme.spacing.lg}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-align: center;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  text-align: center;
`;
