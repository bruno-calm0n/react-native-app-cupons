import type { Coupon } from '../types/coupon';

const hourInMilliseconds = 60 * 60 * 1000;

function createFlashExpiration(hoursFromNow: number) {
  return new Date(Date.now() + hoursFromNow * hourInMilliseconds).toISOString();
}

const couponImages = {
  burgerProduct:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=320&q=80',
  burgerStore:
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=160&q=80',
  cafeProduct:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=320&q=80',
  cafeStore:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=160&q=80',
  dessertProduct:
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=320&q=80',
  dessertStore:
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=160&q=80',
  pizzaProduct:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=320&q=80',
  pizzaStore:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=160&q=80',
  rodizioProduct:
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=320&q=80',
  rodizioStore:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=160&q=80',
} as const;

export const coupons: Coupon[] = [
  {
    id: 'pizza-em-dobro',
    title: 'Pizza em Dobro',
    store: 'Pizzaria Bella',
    discountPercentage: 20,
    validUntil: '2026-07-14',
    status: 'available',
    redeemCode: 'PIZZA20-4821',
    isFlash: true,
    flashExpiresAt: createFlashExpiration(6),
    originalPrice: 89.9,
    discountedPrice: 71.92,
    storeImageUrl: couponImages.pizzaStore,
    productImageUrl: couponImages.pizzaProduct,
    description:
      'Ganhe 20% de desconto na compra de duas pizzas grandes em sabores selecionados.',
    rules: [
      'Válido apenas de segunda a quinta.',
      'Não cumulativo com outras promoções.',
      'Limitado a um uso por cliente.',
    ],
  },
  {
    id: 'combo-burger',
    title: 'Combo Burger',
    store: 'Burger Point',
    discountPercentage: 15,
    validUntil: '2026-10-15',
    status: 'available',
    redeemCode: 'BURGER15-7394',
    isFlash: true,
    flashExpiresAt: createFlashExpiration(18),
    originalPrice: 44.9,
    storeImageUrl: couponImages.burgerStore,
    productImageUrl: couponImages.burgerProduct,
    description:
      'Economize no combo com burger artesanal, batata individual e refrigerante.',
    rules: [
      'Válido para consumo no local.',
      'Não cumulativo com combos promocionais.',
      'Disponível enquanto durarem os estoques.',
    ],
  },
  {
    id: 'cafe-da-tarde',
    title: 'Café da Tarde',
    store: 'Café Central',
    discountPercentage: 10,
    validUntil: '2026-08-31',
    status: 'used',
    redeemCode: 'CAFE10-1286',
    originalPrice: 24.9,
    storeImageUrl: couponImages.cafeStore,
    productImageUrl: couponImages.cafeProduct,
    description:
      'Desconto em bebidas quentes e doces selecionados durante o periodo da tarde.',
    rules: [
      'Válido das 14h às 18h.',
      'Não inclui produtos de entrega.',
      'Apresente o cupom antes do pagamento.',
    ],
  },
  {
    id: 'rodizio-especial',
    title: 'Rodízio Especial',
    store: 'Sabor Brasil',
    discountPercentage: 25,
    validUntil: '2026-07-01',
    status: 'expired',
    redeemCode: 'RODIZIO25-6402',
    originalPrice: 129.9,
    storeImageUrl: couponImages.rodizioStore,
    productImageUrl: couponImages.rodizioProduct,
    description:
      'Aproveite desconto no rodizio completo para reservas realizadas antecipadamente.',
    rules: [
      'Válido mediante reserva.',
      'Cupom individual e intransferível.',
      'Não válido em feriados.',
    ],
  },
  {
    id: 'sobremesa-gratis',
    title: 'Sobremesa Grátis',
    store: 'Doce Vida',
    discountPercentage: 30,
    validUntil: '2026-12-05',
    status: 'available',
    redeemCode: 'DOCE30-9051',
    originalPrice: 32.9,
    storeImageUrl: couponImages.dessertStore,
    productImageUrl: couponImages.dessertProduct,
    description:
      'Desconto especial em sobremesas da vitrine para compras acima do valor minimo.',
    rules: [
      'Valido para compras acima de R$ 40.',
      'Uma sobremesa por pedido.',
      'Sujeito a disponibilidade do dia.',
    ],
  },
];
