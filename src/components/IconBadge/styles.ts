import styled from 'styled-components/native';

export type IconBadgeSize = 'sm' | 'md' | 'lg';
export type IconBadgeShape = 'circle' | 'rounded';

const sizeMap: Record<IconBadgeSize, number> = {
  sm: 40,
  md: 48,
  lg: 56,
};

type ContainerProps = {
  $size: IconBadgeSize;
  $shape: IconBadgeShape;
};

export const Container = styled.View<ContainerProps>`
  width: ${({ $size }) => sizeMap[$size]}px;
  height: ${({ $size }) => sizeMap[$size]}px;
  border-radius: ${({ $size, $shape, theme }) =>
    $shape === 'circle' ? sizeMap[$size] / 2 : theme.radii.sm}px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surfaceStrong};
  align-items: center;
  justify-content: center;
`;
