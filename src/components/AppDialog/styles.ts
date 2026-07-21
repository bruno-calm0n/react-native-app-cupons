import { Modal } from 'react-native';
import styled from 'styled-components/native';

export const NativeModal = styled(Modal).attrs({
  animationType: 'fade',
  transparent: true,
})``;

export const Backdrop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 32, 42, 0.48);
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const Box = styled.View`
  width: 100%;
  max-width: 420px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

type AccentProps = {
  $variant: 'default' | 'danger';
};

export const Accent = styled.View<AccentProps>`
  height: 6px;
  background-color: ${({ theme, $variant }) =>
    $variant === 'danger' ? theme.colors.danger : theme.colors.primary};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.md}px;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const ActionSlot = styled.View`
  flex: 1;
`;
