import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';

import { Container } from './styles';

type AppCardProps = ViewProps & {
  children: ReactNode;
  compact?: boolean;
};

export function AppCard({ children, compact = false, ...props }: AppCardProps) {
  return (
    <Container $compact={compact} {...props}>
      {children}
    </Container>
  );
}
