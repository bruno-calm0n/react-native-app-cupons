import type { Store } from '../types/store';

const storeImages = {
  autoCover:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=640&q=80',
  autoLogo:
    'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=240&q=80',
  beautyCover:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=640&q=80',
  beautyLogo:
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=240&q=80',
  burgerCover:
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=640&q=80',
  burgerLogo:
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=240&q=80',
  cafeCover:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=640&q=80',
  cafeLogo:
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=240&q=80',
  constructionCover:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
  constructionLogo:
    'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=240&q=80',
  decorCover:
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=640&q=80',
  decorLogo:
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=240&q=80',
  dessertCover:
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=640&q=80',
  dessertLogo:
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=240&q=80',
  fashionCover:
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=640&q=80',
  fashionLogo:
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=240&q=80',
  pizzaCover:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=640&q=80',
  pizzaLogo:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=240&q=80',
  rodizioCover:
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=640&q=80',
  rodizioLogo:
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=240&q=80',
  techCover:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=640&q=80',
  techLogo:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=240&q=80',
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
  {
    id: 'moda-viva',
    name: 'Moda Viva',
    category: 'vestuario-acessorios',
    description:
      'Loja de moda casual com peças versáteis, acessórios e ofertas sazonais.',
    imageUrl: storeImages.fashionLogo,
    coverImageUrl: storeImages.fashionCover,
    address: 'Rua Harmonia, 310',
  },
  {
    id: 'obra-facil',
    name: 'Obra Fácil',
    category: 'construcao-reforma',
    description:
      'Materiais de construção, ferramentas e soluções rápidas para reforma.',
    imageUrl: storeImages.constructionLogo,
    coverImageUrl: storeImages.constructionCover,
    address: 'Av. dos Construtores, 980',
  },
  {
    id: 'casa-bella-decor',
    name: 'Casa Bella Decor',
    category: 'casa-decoracao',
    description:
      'Itens de decoração, utilidades e peças para renovar ambientes da casa.',
    imageUrl: storeImages.decorLogo,
    coverImageUrl: storeImages.decorCover,
    address: 'Rua das Acácias, 64',
  },
  {
    id: 'beleza-natural',
    name: 'Beleza Natural',
    category: 'saude-beleza',
    description:
      'Produtos de cuidado pessoal, perfumaria e benefícios para rotina de beleza.',
    imageUrl: storeImages.beautyLogo,
    coverImageUrl: storeImages.beautyCover,
    address: 'Av. Saúde, 208',
  },
  {
    id: 'tech-house',
    name: 'Tech House',
    category: 'tecnologico',
    description:
      'Acessórios tecnológicos, periféricos e gadgets para o dia a dia.',
    imageUrl: storeImages.techLogo,
    coverImageUrl: storeImages.techCover,
    address: 'Rua Digital, 42',
  },
  {
    id: 'auto-prime',
    name: 'Auto Prime',
    category: 'automotivo',
    description:
      'Serviços automotivos, acessórios e manutenção preventiva com descontos.',
    imageUrl: storeImages.autoLogo,
    coverImageUrl: storeImages.autoCover,
    address: 'Av. Motor, 1500',
  },
];
