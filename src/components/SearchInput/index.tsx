import { Search } from 'lucide-react-native';
import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Field } from './styles';

type SearchInputProps = TextInputProps;

export function SearchInput(props: SearchInputProps) {
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
    </Container>
  );
}
