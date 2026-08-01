import type { Store } from '../types/store';

const storeImages = {
  burgerCover:
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=640&q=80',
  burgerLogo:
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=240&q=80',
  cafeCover:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=640&q=80',
  cafeLogo:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=240&q=80',
  dessertCover:
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=640&q=80',
  dessertLogo:
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=240&q=80',
  pizzaCover:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=640&q=80',
  pizzaLogo:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=240&q=80',
  rodizioCover:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=640&q=80',
  rodizioLogo:
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=240&q=80',
} as const;

export const stores: Store[] = [
  {
    id: 'pizzaria-bella',
    name: 'Pizzaria Bella',
    category: 'alimentos',
    description:
      'Pizzaria casual com massas artesanais, forno quente e ofertas para compartilhar.',
    imageUrl: storeImages.pizzaLogo,
    coverImageUrl: storeImages.pizzaCover,
    address: 'Rua das Oliveiras, 120',
  },
  {
    id: 'burger-point',
    name: 'Burger Point',
    category: 'alimentos',
    description:
      'Hamburgueria urbana com combos rápidos, carnes artesanais e acompanhamentos clássicos.',
    imageUrl: storeImages.burgerLogo,
    coverImageUrl: storeImages.burgerCover,
    address: 'Av. Central, 420',
  },
  {
    id: 'cafe-central',
    name: 'Café Central',
    category: 'alimentos',
    description:
      'Cafeteria de bairro com bebidas quentes, doces frescos e pausa tranquila no dia.',
    imageUrl: storeImages.cafeLogo,
    coverImageUrl: storeImages.cafeCover,
    address: 'Praça Aurora, 55',
  },
  {
    id: 'sabor-brasil',
    name: 'Sabor Brasil',
    category: 'alimentos',
    description:
      'Restaurante de rodízio com pratos brasileiros, reservas e promoções especiais.',
    imageUrl: storeImages.rodizioLogo,
    coverImageUrl: storeImages.rodizioCover,
    address: 'Rua Rio Branco, 890',
  },
  {
    id: 'doce-vida',
    name: 'Doce Vida',
    category: 'alimentos',
    description:
      'Doceria com sobremesas de vitrine, bolos e benefícios para compras selecionadas.',
    imageUrl: storeImages.dessertLogo,
    coverImageUrl: storeImages.dessertCover,
    address: 'Rua das Flores, 77',
  },
];
