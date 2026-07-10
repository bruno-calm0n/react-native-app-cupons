import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { AuthFooter } from '../../components/AuthFooter';
import { AuthLayout } from '../../components/AuthLayout';
import type { RootStackParamList } from '../../navigation/types';
import {
  ButtonWrapper,
  ForgotButton,
  ForgotText,
  ForgotWrapper,
  Form,
} from './styles';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <AuthLayout
      footer={
        <AuthFooter
          actionLabel="Criar cadastro"
          onPress={() => navigation.navigate('Register')}
          text="Não tem conta?"
        />
      }
      subtitle="Acesse sua conta"
      title="Entrar"
    >
      <Form>
        <AppTextInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="E-mail"
          placeholder="seuemail@exemplo.com"
        />
        <AppTextInput label="Senha" placeholder="••••••••" secureTextEntry />

        <ForgotWrapper>
          <ForgotButton
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <ForgotText>Esqueci minha senha</ForgotText>
          </ForgotButton>
        </ForgotWrapper>

        <ButtonWrapper>
          <AppButton onPress={() => navigation.replace('Coupons')} title="Entrar" />
        </ButtonWrapper>

 {/* botao login com google */}
        {/* <AppButton
          onPress={() => navigation.replace('Coupons')}
          title="Entrar com Google"
          variant="secondary"
        /> */}
      </Form>
    </AuthLayout>
  );
}
