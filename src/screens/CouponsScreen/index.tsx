import { useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserRound } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { CouponCard } from '../../components/CouponCard';
import { EmptyState } from '../../components/EmptyState';
import { SearchInput } from '../../components/SearchInput';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import {
  Container,
  Eyebrow,
  Header,
  HeaderContent,
  List,
  ProfileButton,
  SafeArea,
  SearchWrapper,
  Subtitle,
  Title,
} from './styles';

type CouponsScreenProps = NativeStackScreenProps<RootStackParamList, 'Coupons'>;

export function CouponsScreen({ navigation }: CouponsScreenProps) {
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const filteredCoupons = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return coupons;
    }

    return coupons.filter((coupon) => {
      const searchableContent = `${coupon.title} ${coupon.store}`.toLowerCase();

      return searchableContent.includes(normalizedSearch);
    });
  }, [search]);

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <Header>
          <HeaderContent>
            <Eyebrow>Cupons disponíveis</Eyebrow>
            {/* <Title>Economize no que importa hoje.</Title> */}
            {/* <Subtitle>
              {filteredCoupons.length} cupons encontrados para restaurantes,
              cafés e sobremesas.
            </Subtitle> */}
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
