import type { ReactNode } from 'react';
import type { PressableProps } from 'react-native';

import type { ButtonSize, ButtonVariant } from './styles';
import { Container, IconSlot, Title } from './styles';

type AppButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

export function AppButton({
  title,
  variant = 'primary',
  size = 'regular',
  icon,
  disabled = false,
  ...props
}: AppButtonProps) {
  const isDisabled = Boolean(disabled);

  return (
    <Container
      accessibilityRole="button"
      disabled={isDisabled}
      $disabled={isDisabled}
      $size={size}
      $variant={variant}
      style={({ pressed }) => ({
        opacity: isDisabled ? 0.56 : pressed ? 0.82 : 1,
      })}
      {...props}
    >
      {icon ? <IconSlot>{icon}</IconSlot> : null}
      <Title $disabled={isDisabled} $size={size} $variant={variant}>
        {title}
      </Title>
    </Container>
  );
}
