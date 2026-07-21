import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 48px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.spacing.lg}px;
`;

export const Field = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-left: ${({ theme }) => theme.spacing.md}px;
`;
