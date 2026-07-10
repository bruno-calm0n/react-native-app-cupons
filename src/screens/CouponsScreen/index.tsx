import { useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserRound } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { CouponCard } from '../../components/CouponCard';
import { EmptyState } from '../../components/EmptyState';
import { FilterChip } from '../../components/FilterChip';
import { SearchInput } from '../../components/SearchInput';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import type { CouponAvailability } from '../../types/coupon';
import { getCouponAvailability } from '../../utils/couponStatus';
import {
  Container,
  Eyebrow,
  FiltersBar,
  Header,
  HeaderContent,
  List,
  ProfileButton,
  SafeArea,
  SearchWrapper,
} from './styles';

type CouponsScreenProps = NativeStackScreenProps<RootStackParamList, 'Coupons'>;
type CouponFilter = CouponAvailability | 'all';

const filterOptions: Array<{ label: string; value: CouponFilter }> = [
  { label: 'Todos', value: 'all' },
  { label: 'Válidos', value: 'available' },
  { label: 'Expirando', value: 'expiringSoon' },
  { label: 'Usados', value: 'used' },
  { label: 'Expirados', value: 'expired' },
];

export function CouponsScreen({ navigation }: CouponsScreenProps) {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<CouponFilter>('all');

  const filteredCoupons = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const availabilityPriority = {
      expiringSoon: 0,
      available: 1,
      used: 2,
      expired: 3,
    };

    const searchedCoupons = normalizedSearch
      ? coupons.filter((coupon) => {
          const searchableContent =
            `${coupon.title} ${coupon.store}`.toLowerCase();

          return searchableContent.includes(normalizedSearch);
        })
      : [...coupons];

    const statusFilteredCoupons = searchedCoupons.filter((coupon) => {
      if (selectedFilter === 'all') {
        return true;
      }

      return getCouponAvailability(coupon) === selectedFilter;
    });

    return statusFilteredCoupons.sort(
      (firstCoupon, secondCoupon) =>
        availabilityPriority[getCouponAvailability(firstCoupon)] -
        availabilityPriority[getCouponAvailability(secondCoupon)],
    );
  }, [search, selectedFilter]);

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <Header>
          <HeaderContent>
            <Eyebrow>Cupons disponíveis</Eyebrow>
          </HeaderContent>

          <ProfileButton activeOpacity={0.78}>
            <UserRound color={theme.colors.primary} size={28} strokeWidth={1.8} />
          </ProfileButton>
        </Header>

        <SearchWrapper>
          <SearchInput
            onChangeText={setSearch}
            placeholder="Pesquisar cupons"
            value={search}
          />
        </SearchWrapper>

        <FiltersBar>
          {filterOptions.map((filter) => (
            <FilterChip
              key={filter.value}
              label={filter.label}
              onPress={() => setSelectedFilter(filter.value)}
              selected={selectedFilter === filter.value}
            />
          ))}
        </FiltersBar>

        <List
          ListEmptyComponent={
            <EmptyState
              description="Tente buscar por outro cupom ou estabelecimento."
              title="Nenhum cupom encontrado"
            />
          }
          data={filteredCoupons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CouponCard
              coupon={item}
              onPress={() =>
                navigation.navigate('CouponDetail', {
                  couponId: item.id,
                })
              }
            />
          )}
        />
      </Container>
    </SafeArea>
  );
}
