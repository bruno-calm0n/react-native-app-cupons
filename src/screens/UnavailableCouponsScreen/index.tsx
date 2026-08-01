import { useEffect, useMemo, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CouponCard } from '../../components/CouponCard';
import { EmptyState } from '../../components/EmptyState';
import { ScreenHeader } from '../../components/ScreenHeader';
import { coupons } from '../../mocks/coupons';
import type { RootStackParamList } from '../../navigation/types';
import { getCouponAvailability } from '../../utils/couponStatus';
import { Container, List, SafeArea } from './styles';

type UnavailableCouponsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UnavailableCoupons'
>;

export function UnavailableCouponsScreen({
  navigation,
}: UnavailableCouponsScreenProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unavailableCoupons = useMemo(() => {
    const availabilityPriority = {
      used: 0,
      expired: 1,
      expiringSoon: 2,
      available: 3,
    };

    return coupons
      .filter((coupon) => {
        const availability = getCouponAvailability(coupon, now);

        return availability === 'used' || availability === 'expired';
      })
      .sort(
        (firstCoupon, secondCoupon) =>
          availabilityPriority[getCouponAvailability(firstCoupon, now)] -
          availabilityPriority[getCouponAvailability(secondCoupon, now)],
      );
  }, [now]);

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Container>
        <ScreenHeader
          onBack={() => navigation.goBack()}
          title="Usados e expirados"
        />

        <List
          ListEmptyComponent={
            <EmptyState
              description="Quando um cupom for usado ou expirar, ele aparecerá aqui."
              title="Nenhum cupom indisponível"
            />
          }
          data={unavailableCoupons}
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
      </Container>
    </SafeArea>
  );
}
