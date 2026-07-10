import { useEffect } from 'react';

import { Container, Label, Message } from './styles';

type AppToastProps = {
  visible: boolean;
  label?: string;
  message: string;
  durationMs?: number;
  onHide: () => void;
};

export function AppToast({
  visible,
  label = 'Sucesso',
  message,
  durationMs = 5000,
  onHide,
}: AppToastProps) {
  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timeoutId = setTimeout(onHide, durationMs);

    return () => clearTimeout(timeoutId);
  }, [durationMs, onHide, visible]);

  if (!visible) {
    return null;
  }

  return (
    <Container pointerEvents="none">
      <Label>{label}</Label>
      <Message>{message}</Message>
    </Container>
  );
}
