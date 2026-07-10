import type { ReactNode } from 'react';
import type { Edge } from 'react-native-safe-area-context';

import { Content, SafeArea } from './styles';

type AppContainerProps = {
  children: ReactNode;
  edges?: Edge[];
};

export function AppContainer({
  children,
  edges = ['top', 'bottom'],
}: AppContainerProps) {
  return (
    <SafeArea edges={edges}>
      <Content>{children}</Content>
    </SafeArea>
  );
}
