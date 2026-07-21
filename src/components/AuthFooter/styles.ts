import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
`;

export const Action = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.xxs}px;
`;

export const ActionText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  text-decoration-line: underline;
`;
