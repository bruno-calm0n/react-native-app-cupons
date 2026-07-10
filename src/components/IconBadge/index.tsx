import type { ReactNode } from 'react';

import type { IconBadgeShape, IconBadgeSize } from './styles';
import { Container } from './styles';

type IconBadgeProps = {
  children: ReactNode;
  size?: IconBadgeSize;
  shape?: IconBadgeShape;
};

export function IconBadge({
  children,
  size = 'md',
  shape = 'circle',
}: IconBadgeProps) {
  return (
    <Container $shape={shape} $size={size}>
      {children}
    </Container>
  );
}
