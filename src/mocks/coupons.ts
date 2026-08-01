import type { Coupon } from '../types/coupon';

const hourInMilliseconds = 60 * 60 * 1000;

function createFlashExpiration(hoursFromNow: number) {
  return new Date(Date.now() + hoursFromNow * hourInMilliseconds).toISOString();
}

const couponImages = {
  autoProduct:
    'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=320&q=80',
  autoStore:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=160&q=80',
  beautyProduct:
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=320&q=80',
  beautyStore:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=160&q=80',
  burgerProduct:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=320&q=80',
  burgerStore:
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=160&q=80',
  cafeProduct:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=320&q=80',
  cafeStore:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=160&q=80',
  constructionProduct:
    'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=320&q=80',
  constructionStore:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=160&q=80',
  decorProduct:
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=320&q=80',
  decorStore:
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=160&q=80',
  dessertProduct:
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=320&q=80',
  dessertStore:
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=160&q=80',
  fashionProduct:
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=320&q=80',
  fashionStore:
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=160&q=80',
  pizzaProduct:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=320&q=80',
  pizzaStore:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=160&q=80',
  rodizioProduct:
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=320&q=80',
  rodizioStore:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=160&q=80',
  techProduct:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=320&q=80',
  techStore:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=160&q=80',
} as const;

export const coupons: Coupon[] = [
  {
    id: 'pizza-em-dobro',
    title: 'Pizza em Dobro',
    storeId: 'pizzaria-bella',
    storeCategory: 'alimentos',
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
    storeId: 'burger-point',
    storeCategory: 'alimentos',
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
    storeId: 'cafe-central',
    storeCategory: 'alimentos',
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
    storeId: 'sabor-brasil',
    storeCategory: 'alimentos',
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
    storeId: 'doce-vida',
    storeCategory: 'alimentos',
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
  {
    id: 'look-completo',
    title: 'Look Completo',
    storeId: 'moda-viva',
    storeCategory: 'vestuario-acessorios',
    store: 'Moda Viva',
    discountPercentage: 18,
    validUntil: '2026-12-20',
    status: 'available',
    redeemCode: 'MODA18-6428',
    originalPrice: 189.9,
    storeImageUrl: couponImages.fashionStore,
    productImageUrl: couponImages.fashionProduct,
    description:
      'Desconto em peças selecionadas para montar um look completo na loja.',
    rules: [
      'Válido para produtos sem promoção ativa.',
      'Não cumulativo com vale-presente.',
      'Apresente o código antes do pagamento.',
    ],
  },
  {
    id: 'kit-reforma',
    title: 'Kit Reforma',
    storeId: 'obra-facil',
    storeCategory: 'construcao-reforma',
    store: 'Obra Fácil',
    discountPercentage: 12,
    validUntil: '2026-11-30',
    status: 'available',
    redeemCode: 'OBRA12-5170',
    originalPrice: 249.9,
    storeImageUrl: couponImages.constructionStore,
    productImageUrl: couponImages.constructionProduct,
    description:
      'Economia em ferramentas e materiais básicos para pequenos reparos.',
    rules: [
      'Válido para compras acima de R$ 150.',
      'Itens elétricos não participam desta oferta.',
      'Uso único por cliente.',
    ],
  },
  {
    id: 'decoracao-da-casa',
    title: 'Decoração da Casa',
    storeId: 'casa-bella-decor',
    storeCategory: 'casa-decoracao',
    store: 'Casa Bella Decor',
    discountPercentage: 22,
    validUntil: '2026-12-12',
    status: 'available',
    redeemCode: 'CASA22-8093',
    originalPrice: 159.9,
    storeImageUrl: couponImages.decorStore,
    productImageUrl: couponImages.decorProduct,
    description:
      'Desconto em itens decorativos para renovar sala, quarto ou escritório.',
    rules: [
      'Válido apenas para itens de decoração.',
      'Não aplicável a móveis planejados.',
      'Oferta limitada ao estoque disponível.',
    ],
  },
  {
    id: 'cuidados-pessoais',
    title: 'Cuidados Pessoais',
    storeId: 'beleza-natural',
    storeCategory: 'saude-beleza',
    store: 'Beleza Natural',
    discountPercentage: 16,
    validUntil: '2026-12-28',
    status: 'available',
    redeemCode: 'BELEZA16-3472',
    originalPrice: 84.9,
    storeImageUrl: couponImages.beautyStore,
    productImageUrl: couponImages.beautyProduct,
    description:
      'Benefício em produtos selecionados de cuidado pessoal e beleza.',
    rules: [
      'Válido para linhas participantes.',
      'Não cumulativo com kits promocionais.',
      'Apresente o cupom no caixa.',
    ],
  },
  {
    id: 'acessorios-tech',
    title: 'Acessórios Tech',
    storeId: 'tech-house',
    storeCategory: 'tecnologico',
    store: 'Tech House',
    discountPercentage: 14,
    validUntil: '2027-01-10',
    status: 'available',
    redeemCode: 'TECH14-2749',
    originalPrice: 119.9,
    storeImageUrl: couponImages.techStore,
    productImageUrl: couponImages.techProduct,
    description:
      'Desconto em acessórios tecnológicos, cabos, capas e periféricos.',
    rules: [
      'Válido para acessórios selecionados.',
      'Não inclui smartphones ou notebooks.',
      'Limitado a uma utilização por CPF.',
    ],
  },
  {
    id: 'checkup-automotivo',
    title: 'Check-up Automotivo',
    storeId: 'auto-prime',
    storeCategory: 'automotivo',
    store: 'Auto Prime',
    discountPercentage: 20,
    validUntil: '2026-12-18',
    status: 'available',
    redeemCode: 'AUTO20-9036',
    originalPrice: 199.9,
    storeImageUrl: couponImages.autoStore,
    productImageUrl: couponImages.autoProduct,
    description:
      'Desconto em check-up preventivo com inspeção visual e diagnóstico básico.',
    rules: [
      'Válido mediante agendamento.',
      'Não inclui troca de peças.',
      'Cupom individual e não cumulativo.',
    ],
  },
];
