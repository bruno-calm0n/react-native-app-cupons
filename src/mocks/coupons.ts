import type { Coupon } from '../types/coupon';

const hourInMilliseconds = 60 * 60 * 1000;

function createFlashExpiration(hoursFromNow: number) {
  return new Date(Date.now() + hoursFromNow * hourInMilliseconds).toISOString();
}

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
    description:
      'Desconto especial em sobremesas da vitrine para compras acima do valor minimo.',
    rules: [
      'Valido para compras acima de R$ 40.',
      'Uma sobremesa por pedido.',
      'Sujeito a disponibilidade do dia.',
    ],
  },
];
