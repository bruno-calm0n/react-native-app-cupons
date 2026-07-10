import styled from 'styled-components/native';

type ContainerProps = {
  $compact: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme, $compact }) =>
    $compact ? theme.spacing.md : theme.spacing.lg}px;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 0.06;
  shadow-radius: 12px;
  shadow-offset: 0px 6px;
  elevation: 2;
`;
