import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { BackButton, Container, RightSlot, Title } from './styles';

type ScreenHeaderProps = {
  title: string;
  onBack?: () => void;
  right?: ReactNode;
};

export function ScreenHeader({ title, onBack, right }: ScreenHeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      {onBack ? (
        <BackButton activeOpacity={0.72} onPress={onBack}>
          <ArrowLeft color={theme.colors.primary} size={30} strokeWidth={1.9} />
        </BackButton>
      ) : null}

      <Title numberOfLines={1}>{title}</Title>
      <RightSlot>{right}</RightSlot>
    </Container>
  );
}
