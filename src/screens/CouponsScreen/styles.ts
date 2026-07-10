import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import type { Coupon } from '../../types/coupon';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xxl}px
    ${({ theme }) => theme.spacing.xl}px 0;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.lg}px;
`;

export const Eyebrow = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  letter-spacing: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xxl}px;
  font-weight: ${({ theme }) => theme.typography.weights.heavy};
  line-height: ${({ theme }) => theme.typography.lineHeights.title}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  line-height: ${({ theme }) => theme.typography.lineHeights.regular}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-width: ${({ theme }) => theme.borderWidths.regular}px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  align-items: center;
  justify-content: center;
`;

export const SearchWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const List = styled(FlatList<Coupon>).attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingBottom: theme.spacing.xxl,
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;
