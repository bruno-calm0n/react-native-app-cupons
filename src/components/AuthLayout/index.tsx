import type { ReactNode } from 'react';
import { Platform } from 'react-native';

import {
  Body,
  Content,
  Footer,
  Header,
  KeyboardView,
  SafeArea,
  Subtitle,
  Title,
} from './styles';

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  return (
    <SafeArea edges={['top', 'bottom']}>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Header>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Header>

          <Body>{children}</Body>

          {footer ? <Footer>{footer}</Footer> : null}
        </Content>
      </KeyboardView>
    </SafeArea>
  );
}
