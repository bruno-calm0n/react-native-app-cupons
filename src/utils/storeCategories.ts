import type { StoreCategoryFilter } from '../types/store';

export const storeCategoryLabels: Record<StoreCategoryFilter, string> = {
  all: 'Todos os setores',
  alimentos: 'Alimentos',
  automotivo: 'Automotivo',
  'casa-decoracao': 'Casa e decoração',
  'construcao-reforma': 'Construção e reforma',
  'saude-beleza': 'Saúde e beleza',
  tecnologico: 'Tecnológico',
  'vestuario-acessorios': 'Vestuário e acessórios',
};

export const storeCategoryOptions: Array<{
  label: string;
  value: StoreCategoryFilter;
}> = [
  { label: storeCategoryLabels.all, value: 'all' },
  { label: storeCategoryLabels.alimentos, value: 'alimentos' },
  {
    label: storeCategoryLabels['vestuario-acessorios'],
    value: 'vestuario-acessorios',
  },
  {
    label: storeCategoryLabels['construcao-reforma'],
    value: 'construcao-reforma',
  },
  {
    label: storeCategoryLabels['casa-decoracao'],
    value: 'casa-decoracao',
  },
  {
    label: storeCategoryLabels['saude-beleza'],
    value: 'saude-beleza',
  },
  { label: storeCategoryLabels.tecnologico, value: 'tecnologico' },
  { label: storeCategoryLabels.automotivo, value: 'automotivo' },
];
