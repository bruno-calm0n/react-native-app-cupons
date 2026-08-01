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

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md}px;
  right: ${({ theme }) => theme.spacing.md}px;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  padding-right: ${({ theme }) => theme.spacing.xl}px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const OptionsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm}px;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;
