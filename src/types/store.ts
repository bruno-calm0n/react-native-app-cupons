export type StoreCategory =
  | 'alimentos'
  | 'vestuario-acessorios'
  | 'construcao-reforma'
  | 'casa-decoracao'
  | 'saude-beleza'
  | 'tecnologico'
  | 'automotivo';

export type StoreCategoryFilter = StoreCategory | 'all';

export type Store = {
  id: string;
  name: string;
  category: StoreCategory;
  description: string;
  imageUrl: string;
  coverImageUrl?: string;
  address?: string;
};
