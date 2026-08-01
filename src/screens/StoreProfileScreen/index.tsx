import { useEffect, useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MapPin } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppCard } from '../../components/AppCard';
import { CouponCard } from '../../components/CouponCard';
import { EmptyState } from '../../components/EmptyState';
import { ScreenHeader } from '../../components/ScreenHeader';
import { coupons } from '../../mocks/coupons';
import { stores } from '../../mocks/stores';
import type { RootStackParamList } from '../../navigation/types';
import {
  getCouponAvailability,
  isFlashCouponActive,
} from '../../utils/couponStatus';
import {
  AddressText,
  AvailableCount,
  CategoryText,
  Container,
  Content,
  CoverFallback,
  CoverImage,
  Description,
  HeaderCardWrapper,
  InfoRow,
  SectionTitle,
  StoreImage,
  StoreImageFallback,
  StoreImageInitial,
  StoreMeta,
  StoreName,
  StoreSummary,
} from './styles';

type StoreProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'StoreProfile'
>;

const maxFeaturedCoupons = 5;

const storeCategoryLabels = {
  alimentos: 'Alimentos',
  automotivo: 'Automotivo',
  'casa-decoracao': 'Casa e decoração',
  'construcao-reforma': 'Construção e reforma',
  'saude-beleza': 'Saúde e beleza',
  tecnologico: 'Tecnológico',
  'vestuario-acessorios': 'Vestuário e acessórios',
};

function getStoreInitial(name: string) {
  return name.trim().charAt(0).toUpperCase() || 'L';
}

export function StoreProfileScreen({
  navigation,
  route,
}: StoreProfileScreenProps) {
  const theme = useTheme();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const store = useMemo(
    () => stores.find((currentStore) => currentStore.id === route.params.storeId),
    [route.params.storeId],
  );

  const featuredCoupons = useMemo(() => {
    if (!store) {
      return [];
    }

    const availabilityPriority = {
      expiringSoon: 1,
      available: 2,
      used: 3,
      expired: 4,
    };

    return coupons
      .filter((coupon) => {
        const availability = getCouponAvailability(coupon, now);

        return (
          coupon.storeId === store.id &&
          (availability === 'available' || availability === 'expiringSoon')
        );
      })
      .sort((firstCoupon, secondCoupon) => {
        const firstFlashPriority = isFlashCouponActive(firstCoupon, now) ? 0 : 1;
        const secondFlashPriority = isFlashCouponActive(secondCoupon, now) ? 0 : 1;

        if (firstFlashPriority !== secondFlashPriority) {
          return firstFlashPriority - secondFlashPriority;
        }

        return (
          availabilityPriority[getCouponAvailability(firstCoupon, now)] -
          availabilityPriority[getCouponAvailability(secondCoupon, now)]
        );
      })
      .slice(0, maxFeaturedCoupons);
  }, [now, store]);

  if (!store) {
    return (
      <Container edges={['top', 'bottom']}>
        <Content>
          <ScreenHeader
            onBack={() => navigation.goBack()}
            title="Perfil da loja"
          />

          <EmptyState
            description="Não foi possível encontrar os dados desta loja."
            title="Loja não encontrada"
          />
        </Content>
      </Container>
    );
  }

  const storeInitial = getStoreInitial(store.name);

  return (
    <Container edges={['top', 'bottom']}>
      <Content>
        <ScreenHeader onBack={() => navigation.goBack()} title="Perfil da loja" />

        <HeaderCardWrapper>
          <AppCard>
            {store.coverImageUrl ? (
              <CoverImage
                accessibilityLabel={`Capa da loja ${store.name}`}
                source={{ uri: store.coverImageUrl }}
              />
            ) : (
              <CoverFallback />
            )}

            <StoreSummary>
              {store.imageUrl ? (
                <StoreImage
                  accessibilityLabel={`Foto da loja ${store.name}`}
                  source={{ uri: store.imageUrl }}
                />
              ) : (
                <StoreImageFallback>
                  <StoreImageInitial>{storeInitial}</StoreImageInitial>
                </StoreImageFallback>
              )}

              <StoreMeta>
                <StoreName>{store.name}</StoreName>
                <CategoryText>{storeCategoryLabels[store.category]}</CategoryText>
              </StoreMeta>
            </StoreSummary>

            <Description>{store.description}</Description>

            {store.address ? (
              <InfoRow>
                <MapPin
                  color={theme.colors.textMuted}
                  size={18}
                  strokeWidth={1.8}
                />
                <AddressText>{store.address}</AddressText>
              </InfoRow>
            ) : null}
          </AppCard>
        </HeaderCardWrapper>

        <SectionTitle>Cupons disponíveis</SectionTitle>
        <AvailableCount>
          {featuredCoupons.length} de até {maxFeaturedCoupons} principais
        </AvailableCount>

        {featuredCoupons.length > 0 ? (
          featuredCoupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              now={now}
              onPress={() =>
                navigation.navigate('CouponDetail', {
                  couponId: coupon.id,
                })
              }
            />
          ))
        ) : (
          <EmptyState
            description="Esta loja não possui cupons disponíveis no momento."
            title="Nenhum cupom disponível"
          />
        )}
      </Content>
    </Container>
  );
}
