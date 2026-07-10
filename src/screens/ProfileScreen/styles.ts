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
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;

export const HeaderCard = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const HeaderInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.surfaceStrong};
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.borderStrong};
  margin-right: ${({ theme }) => theme.spacing.lg}px;
`;

export const AvatarInitials = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const CardSection = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  line-height: ${({ theme }) => theme.typography.lineHeights.title}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const DataRow = styled.View`
  align-items: center;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.md}px 0;
`;

export const DataContent = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.md}px;
`;

export const DataLabel = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xxs}px;
`;

export const DataValue = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
`;

export const ActionWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;
