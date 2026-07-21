import styled from 'styled-components/native';

export const Container = styled.View`
  min-height: 56px;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-left: -${({ theme }) => theme.spacing.sm}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const RightSlot = styled.View`
  min-width: 44px;
  align-items: flex-end;
`;
