import styled from 'styled-components/native';

export const IllustrationWrapper = styled.View`
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const IllustrationCircle = styled.View`
  width: 104px;
  height: 104px;
  border-radius: 52px;
  border-width: ${({ theme }) => theme.borderWidths.strong}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  justify-content: center;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.06;
  shadow-radius: 12px;
  shadow-offset: 0px 6px;
  elevation: 2;
`;

export const Form = styled.View`
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;
