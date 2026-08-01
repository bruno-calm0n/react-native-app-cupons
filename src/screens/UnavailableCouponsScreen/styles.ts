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

export const List = styled(FlatList<Coupon>).attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingBottom: theme.spacing.xxl,
  },
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
`;
