import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

type FieldProps = {
  $hasError: boolean;
};

export const Field = styled.TextInput<FieldProps>`
  min-height: 48px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.danger : theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  padding: ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.lg}px;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;
