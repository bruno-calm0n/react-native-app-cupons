import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Smile } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { AuthLayout } from '../../components/AuthLayout';
import type { RootStackParamList } from '../../navigation/types';
import {
  ButtonWrapper,
  Form,
  IllustrationCircle,
  IllustrationWrapper,
} from './styles';

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

export function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  const theme = useTheme();

  return (
    <AuthLayout
      subtitle="Informe seu e-mail para receber as instruções."
      title="Recuperar senha"
    >
    {/* remover isso por agora */}
      {/* <IllustrationWrapper>
        <IllustrationCircle>
          <Smile color={theme.colors.primary} size={44} strokeWidth={1.2} />
        </IllustrationCircle>
      </IllustrationWrapper> */}

      <Form>
        <AppTextInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="E-mail"
          placeholder="seuemail@exemplo.com"
        />

        <ButtonWrapper>
          <AppButton title="Enviar link" />
        </ButtonWrapper>

        <AppButton
          onPress={() => navigation.navigate('Login')}
          title="Voltar para login"
          variant="secondary"
        />
      </Form>
    </AuthLayout>
  );
}
