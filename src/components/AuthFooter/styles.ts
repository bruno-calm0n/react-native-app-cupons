import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
`;

export const Action = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.xxs}px;
`;

export const ActionText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  text-decoration-line: underline;
`;
