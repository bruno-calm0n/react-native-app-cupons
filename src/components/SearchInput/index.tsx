import type { ReactNode } from 'react';
import { Search } from 'lucide-react-native';
import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Field, RightButton } from './styles';

type SearchInputProps = TextInputProps & {
  rightIcon?: ReactNode;
  onRightPress?: () => void;
  rightAccessibilityLabel?: string;
};

export function SearchInput({
  rightIcon,
  onRightPress,
  rightAccessibilityLabel,
  ...props
}: SearchInputProps) {
  const theme = useTheme();

  return (
    <Container>
      <Search color={theme.colors.icon} size={24} strokeWidth={1.8} />
      <Field
        autoCapitalize="none"
        placeholderTextColor={theme.colors.textSoft}
        selectionColor={theme.colors.text}
        {...props}
      />
      {rightIcon && onRightPress ? (
        <RightButton
          accessibilityLabel={rightAccessibilityLabel}
          accessibilityRole="button"
          activeOpacity={0.78}
          onPress={onRightPress}
        >
          {rightIcon}
        </RightButton>
      ) : null}
    </Container>
  );
}
