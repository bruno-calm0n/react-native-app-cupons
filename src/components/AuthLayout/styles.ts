import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const KeyboardView = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.xxl,
  },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const Header = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xxl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  line-height: ${({ theme }) => theme.typography.lineHeights.title}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const Body = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  padding-top: ${({ theme }) => theme.spacing.xxl}px;
`;
