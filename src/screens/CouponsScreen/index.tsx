import { useEffect, useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListFilter } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { CouponCard } from '../../components/CouponCard';
import { EmptyState } from '../../components/EmptyState';
import { FilterChip } from '../../components/FilterChip';
import { SearchInput } from '../../components/SearchInput';
import { StoreCategoryFilterDialog } from '../../components/StoreCategoryFilterDialog';
import { coupons } from '../../mocks/coupons';
import { customer } from '../../mocks/customer';
import type { RootStackParamList } from '../../navigation/types';
import type { StoreCategoryFilter } from '../../types/store';
import {
  getCouponAvailability,
  isFlashCouponActive,
} from '../../utils/couponStatus';
import { getCustomerInitials } from '../../utils/customerInitials';
import {
  Container,
  Eyebrow,
  FiltersBar,
  Header,
  HeaderContent,
  List,
  ProfileButton,
  ProfileImage,
  ProfileInitials,
  SafeArea,
  SearchWrapper,
} from './styles';

type CouponsScreenProps = NativeStackScreenProps<RootStackParamList, 'Coupons'>;
type CouponFilter = 'all' | 'flash' | 'valid';

const filterOptions: Array<{ label: string; value: CouponFilter }> = [
  { label: 'Todos', value: 'all' },
  { label: 'Relâmpago', value: 'flash' },
  { label: 'Válidos', value: 'valid' },
];

export function CouponsScreen({ navigation }: CouponsScreenProps) {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<CouponFilter>('all');
  const [selectedCategory, setSelectedCategory] =
    useState<StoreCategoryFilter>('all');
  const [isCategoryFilterVisible, setIsCategoryFilterVisible] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

    const categoryFilteredCoupons = searchedCoupons.filter((coupon) => {
      if (selectedCategory === 'all') {
        return true;
      }

      return coupon.storeCategory === selectedCategory;
    });

    const statusFilteredCoupons = categoryFilteredCoupons.filter((coupon) => {
      const couponAvailability = getCouponAvailability(coupon, now);
      const isAvailableCoupon =
        couponAvailability === 'available' ||
        couponAvailability === 'expiringSoon';

      if (selectedFilter === 'all') {
        return isAvailableCoupon;
      }

      if (selectedFilter === 'flash') {
        return isFlashCouponActive(coupon, now);
      }

      if (selectedFilter === 'valid') {
        return isAvailableCoupon;
      }

      return false;
    });

    return statusFilteredCoupons.sort(
      (firstCoupon, secondCoupon) =>
        availabilityPriority[getCouponAvailability(firstCoupon, now)] -
        availabilityPriority[getCouponAvailability(secondCoupon, now)],
    );
  }, [now, search, selectedCategory, selectedFilter]);

  const isCategoryFilterActive = selectedCategory !== 'all';

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <Header>
          <HeaderContent>
            <Eyebrow>Cupons disponíveis</Eyebrow>
          </HeaderContent>

          <ProfileButton
            accessibilityLabel="Abrir perfil"
            activeOpacity={0.78}
            onPress={() => navigation.navigate('Profile')}
          >
            {customer.avatarUrl ? (
              <ProfileImage source={{ uri: customer.avatarUrl }} />
            ) : (
              <ProfileInitials>
                {getCustomerInitials(customer.name)}
              </ProfileInitials>
            )}
          </ProfileButton>
        </Header>

        <SearchWrapper>
          <SearchInput
            onChangeText={setSearch}
            onRightPress={() => setIsCategoryFilterVisible(true)}
            placeholder="Pesquisar estabelecimentos e cupons"
            rightAccessibilityLabel="Abrir filtro de setores"
            rightIcon={
              <ListFilter
                color={
                  isCategoryFilterActive
                    ? theme.colors.primary
                    : theme.colors.icon
                }
                size={22}
                strokeWidth={1.9}
              />
            }
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
              now={now}
              onPress={() =>
                navigation.navigate('CouponDetail', {
                  couponId: item.id,
                })
              }
            />
          )}
        />

        <StoreCategoryFilterDialog
          onClose={() => setIsCategoryFilterVisible(false)}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          visible={isCategoryFilterVisible}
        />
      </Container>
    </SafeArea>
  );
}
