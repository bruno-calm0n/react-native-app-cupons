import type { ReactNode } from 'react';

import { Container, Content, IconContainer, Title } from './styles';

type InfoSectionProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function InfoSection({ icon, title, children }: InfoSectionProps) {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  );
}
