import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, ErrorMessage, Field, Label } from './styles';

type AppTextInputProps = TextInputProps & {
  label: string;
  error?: string;
};

export function AppTextInput({ label, error, ...props }: AppTextInputProps) {
  const theme = useTheme();

  return (
    <Container>
      <Label>{label}</Label>
      <Field
        $hasError={Boolean(error)}
        placeholderTextColor={theme.colors.textSoft}
        selectionColor={theme.colors.text}
        {...props}
      />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </Container>
  );
}
