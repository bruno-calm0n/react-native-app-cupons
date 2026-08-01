import { X } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import type { StoreCategoryFilter } from '../../types/store';
import { storeCategoryOptions } from '../../utils/storeCategories';
import { FilterChip } from '../FilterChip';
import {
  Backdrop,
  Box,
  CloseButton,
  Content,
  Message,
  NativeModal,
  OptionsList,
  Title,
} from './styles';

type StoreCategoryFilterDialogProps = {
  visible: boolean;
  selectedCategory: StoreCategoryFilter;
  onSelectCategory: (category: StoreCategoryFilter) => void;
  onClose: () => void;
};

export function StoreCategoryFilterDialog({
  visible,
  selectedCategory,
  onSelectCategory,
  onClose,
}: StoreCategoryFilterDialogProps) {
  const theme = useTheme();

  function handleSelectCategory(category: StoreCategoryFilter) {
    onSelectCategory(category);
    onClose();
  }

  return (
    <NativeModal onRequestClose={onClose} visible={visible}>
      <Backdrop>
        <Box>
          <CloseButton
            accessibilityLabel="Fechar filtro de setores"
            activeOpacity={0.78}
            onPress={onClose}
          >
            <X color={theme.colors.textMuted} size={22} strokeWidth={1.9} />
          </CloseButton>

          <Content>
            <Title>Filtrar por setor</Title>
            <Message>Escolha um setor para ver apenas cupons desse segmento.</Message>

            <OptionsList>
              {storeCategoryOptions.map((category) => (
                <FilterChip
                  key={category.value}
                  label={category.label}
                  onPress={() => handleSelectCategory(category.value)}
                  selected={selectedCategory === category.value}
                />
              ))}
            </OptionsList>
          </Content>
        </Box>
      </Backdrop>
    </NativeModal>
  );
}
