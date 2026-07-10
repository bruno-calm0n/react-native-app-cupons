import styled from 'styled-components/native';

export const Form = styled.View`
  width: 100%;
`;

export const ForgotWrapper = styled.View`
  align-items: flex-end;
  margin-top: -${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl}px;
`;

export const ForgotButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.xxs}px;
`;

export const ForgotText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  text-decoration-line: underline;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;
