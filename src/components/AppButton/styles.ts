import styled, { css } from 'styled-components/native';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'text'
  | 'textDanger';

export type ButtonSize = 'regular' | 'small';

type ContainerProps = {
  $variant: ButtonVariant;
  $disabled: boolean;
  $size: ButtonSize;
};

const textVariants: ButtonVariant[] = ['text', 'textDanger'];

export const Container = styled.Pressable<ContainerProps>`
  min-height: ${({ $size }) => ($size === 'small' ? 36 : 48)}px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md}px;
  border-width: ${({ theme, $variant }) =>
    textVariants.includes($variant) ? 0 : theme.borderWidths.regular}px;
  border-color: ${({ theme, $variant }) => {
    if ($variant === 'primary') {
      return theme.colors.primary;
    }

    if ($variant === 'danger') {
      return theme.colors.danger;
    }

    return theme.colors.border;
  }};
  background-color: ${({ theme, $variant, $disabled }) => {
    if ($disabled) {
      return textVariants.includes($variant)
        ? 'transparent'
        : theme.colors.disabled;
    }

    if ($variant === 'primary') {
      return theme.colors.primary;
    }

    if ($variant === 'danger') {
      return theme.colors.danger;
    }

    return textVariants.includes($variant)
      ? 'transparent'
      : theme.colors.surface;
  }};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: ${({ theme, $size }) => ($size === 'small' ? theme.spacing.sm : 0)}px
    ${({ theme }) => theme.spacing.lg}px;

  ${({ $variant }) =>
    !textVariants.includes($variant) &&
    css`
      shadow-color: ${({ theme }) => theme.colors.black};
      shadow-opacity: 0.06;
      shadow-radius: 10px;
      shadow-offset: 0px 5px;
      elevation: 2;
    `}
`;

export const IconSlot = styled.View`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

type TitleProps = {
  $variant: ButtonVariant;
  $disabled: boolean;
  $size: ButtonSize;
};

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, $variant, $disabled }) => {
    if ($disabled) {
      return theme.colors.white;
    }

    if ($variant === 'primary' || $variant === 'danger') {
      return theme.colors.white;
    }

    if ($variant === 'textDanger') {
      return theme.colors.danger;
    }

    return theme.colors.primary;
  }};
  font-size: ${({ theme, $size }) =>
    $size === 'small'
      ? theme.typography.sizes.sm
      : theme.typography.sizes.md}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;
