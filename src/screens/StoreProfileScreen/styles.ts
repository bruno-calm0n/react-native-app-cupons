import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
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

export const HeaderCardWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const CoverImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 132px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const CoverFallback = styled.View`
  width: 100%;
  height: 132px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  background-color: ${({ theme }) => theme.colors.surfaceStrong};
`;

export const StoreSummary = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: -${({ theme }) => theme.spacing.xl}px;
`;

export const StoreImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  border-width: ${({ theme }) => theme.borderWidths.strong}px;
  border-color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const StoreImageFallback = styled.View`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  border-width: ${({ theme }) => theme.borderWidths.strong}px;
  border-color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.surfaceStrong};
  align-items: center;
  justify-content: center;
`;

export const StoreImageInitial = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const StoreMeta = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.lg}px;
  padding-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const StoreName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const CategoryText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

export const InfoRow = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export const AddressText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-family: ${({ theme }) => theme.typography.fonts.heavy};
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
`;

export const AvailableCount = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  margin-top: ${({ theme }) => theme.spacing.xxs}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;
