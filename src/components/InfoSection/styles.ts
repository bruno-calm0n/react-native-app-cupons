import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.04;
  shadow-radius: 10px;
  shadow-offset: 0px 5px;
  elevation: 1;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceStrong};
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.lg}px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;
