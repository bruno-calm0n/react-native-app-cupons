import { MessageCircle, Ticket, X } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../AppButton';
import {
  Actions,
  Backdrop,
  Box,
  CloseButton,
  Content,
  Message,
  NativeModal,
  Title,
} from './styles';

type CouponUseOptionsDialogProps = {
  visible: boolean;
  onClose: () => void;
  onPresentCode: () => void;
  onShareViaWhatsApp: () => void;
};

export function CouponUseOptionsDialog({
  visible,
  onClose,
  onPresentCode,
  onShareViaWhatsApp,
}: CouponUseOptionsDialogProps) {
  const theme = useTheme();

  return (
    <NativeModal onRequestClose={onClose} visible={visible}>
      <Backdrop>
        <Box>
          <CloseButton
            accessibilityLabel="Fechar opções de uso"
            activeOpacity={0.78}
            onPress={onClose}
          >
            <X color={theme.colors.textMuted} size={22} strokeWidth={1.9} />
          </CloseButton>

          <Content>
            <Title>Como deseja usar o cupom?</Title>
            <Message>
              Escolha se prefere enviar o código pelo WhatsApp ou apresentar o
              código na tela para o operador.
            </Message>

            <Actions>
              <AppButton
                icon={
                  <MessageCircle
                    color={theme.colors.white}
                    size={20}
                    strokeWidth={1.9}
                  />
                }
                onPress={onShareViaWhatsApp}
                title="Enviar pelo WhatsApp"
              />

              <AppButton
                icon={
                  <Ticket
                    color={theme.colors.primary}
                    size={20}
                    strokeWidth={1.9}
                  />
                }
                onPress={onPresentCode}
                title="Apresentar código"
                variant="secondary"
              />

              <AppButton
                onPress={onClose}
                title="Cancelar"
                variant="text"
              />
            </Actions>
          </Content>
        </Box>
      </Backdrop>
    </NativeModal>
  );
}
