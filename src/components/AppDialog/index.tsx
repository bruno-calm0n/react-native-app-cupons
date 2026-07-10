import { AppButton } from '../AppButton';
import {
  Accent,
  ActionSlot,
  Actions,
  Backdrop,
  Box,
  Content,
  Message,
  NativeModal,
  Title,
} from './styles';

type AppDialogProps = {
  visible: boolean;
  title: string;
  message: string;
  variant?: 'default' | 'danger';
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm?: () => void;
};

export function AppDialog({
  visible,
  title,
  message,
  variant = 'default',
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}: AppDialogProps) {
  return (
    <NativeModal onRequestClose={onCancel} visible={visible}>
      <Backdrop>
        <Box>
          <Accent $variant={variant} />
          <Content>
            <Title>{title}</Title>
            <Message>{message}</Message>

            <Actions>
              <ActionSlot>
                <AppButton
                  onPress={onCancel}
                  size="small"
                  title={cancelLabel}
                  variant="secondary"
                />
              </ActionSlot>

              {onConfirm ? (
                <ActionSlot>
                  <AppButton
                    onPress={onConfirm}
                    size="small"
                    title={confirmLabel}
                    variant={variant === 'danger' ? 'danger' : 'primary'}
                  />
                </ActionSlot>
              ) : null}
            </Actions>
          </Content>
        </Box>
      </Backdrop>
    </NativeModal>
  );
}
