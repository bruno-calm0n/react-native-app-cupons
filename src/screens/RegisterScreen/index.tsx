import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { AuthFooter } from '../../components/AuthFooter';
import { AuthLayout } from '../../components/AuthLayout';
import type { RootStackParamList } from '../../navigation/types';
import { Form, SubmitWrapper } from './styles';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  return (
    <AuthLayout
      footer={
        <AuthFooter
          actionLabel="Entrar"
          onPress={() => navigation.navigate('Login')}
          text="Já tem conta?"
        />
      }
      subtitle="Crie sua conta"
      title="Cadastro"
    >
      <Form>
        <AppTextInput
          autoCapitalize="words"
          label="Nome"
          placeholder="Seu nome completo"
        />
        <AppTextInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="E-mail"
          placeholder="seuemail@exemplo.com"
        />
        <AppTextInput label="Senha" placeholder="Crie uma senha" secureTextEntry />
        <AppTextInput
          label="Confirmar senha"
          placeholder="Repita a senha"
          secureTextEntry
        />

        <SubmitWrapper>
          <AppButton
            onPress={() => navigation.replace('Coupons')}
            title="Cadastrar"
          />
        </SubmitWrapper>
      </Form>
    </AuthLayout>
  );
}
