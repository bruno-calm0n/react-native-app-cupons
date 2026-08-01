import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxl,
    paddingBottom: theme.spacing.xxl,
  },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const Form = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const SubmitWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;
