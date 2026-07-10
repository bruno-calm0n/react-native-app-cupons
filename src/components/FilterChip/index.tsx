import type { PressableProps } from 'react-native';

import { Container, Label } from './styles';

type FilterChipProps = PressableProps & {
  label: string;
  selected?: boolean;
};

export function FilterChip({
  label,
  selected = false,
  disabled = false,
  ...props
}: FilterChipProps) {
  const isDisabled = Boolean(disabled);

  return (
    <Container
      accessibilityRole="button"
      accessibilityState={{ selected, disabled: isDisabled }}
      disabled={isDisabled}
      $selected={selected}
      style={({ pressed }) => ({
        opacity: isDisabled ? 0.56 : pressed ? 0.78 : 1,
      })}
      {...props}
    >
      <Label $selected={selected}>{label}</Label>
    </Container>
  );
}
