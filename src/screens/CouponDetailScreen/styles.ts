import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

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
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const RuleRow = styled.View`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.xxs}px;
`;

export const Bullet = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`;

export const RuleText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const ActionWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const BlockedMessage = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight}px;
  text-align: center;
`;
