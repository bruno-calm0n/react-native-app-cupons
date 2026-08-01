import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { AuthFooter } from '../../components/AuthFooter';
import { AuthLayout } from '../../components/AuthLayout';
import type { RootStackParamList } from '../../navigation/types';
import { formatCEP, formatCPF, formatPhone, onlyDigits } from '../../utils/masks';
import { Form, SubmitWrapper } from './styles';

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

type RegisterForm = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormErrors = Partial<Record<keyof RegisterForm, string>>;

const initialForm: RegisterForm = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  password: '',
  confirmPassword: '',
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [form, setForm] = useState<RegisterForm>(initialForm);
  const [errors, setErrors] = useState<RegisterFormErrors>({});

  function clearFieldError(field: keyof RegisterForm) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];

      return nextErrors;
    });
  }

  function updateField(field: keyof RegisterForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
    clearFieldError(field);
  }

  function validateForm() {
    const nextErrors: RegisterFormErrors = {};
    const normalizedEmail = form.email.trim();

    if (!form.name.trim()) {
      nextErrors.name = 'Informe seu nome completo.';
    }

    if (!normalizedEmail) {
      nextErrors.email = 'Informe seu e-mail.';
    } else if (!normalizedEmail.includes('@')) {
      nextErrors.email = 'Informe um e-mail válido.';
    }

    if (onlyDigits(form.cpf).length !== 11) {
      nextErrors.cpf = 'Informe um CPF com 11 dígitos.';
    }

    if (onlyDigits(form.phone).length !== 11) {
      nextErrors.phone = 'Informe um celular com DDD e 11 dígitos.';
    }

    if (onlyDigits(form.cep).length !== 8) {
      nextErrors.cep = 'Informe um CEP com 8 dígitos.';
    }

    if (!form.password) {
      nextErrors.password = 'Informe uma senha.';
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = 'Confirme sua senha.';
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = 'As senhas não conferem.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    navigation.replace('Coupons');
  }

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
          error={errors.name}
          label="Nome"
          onChangeText={(value) => updateField('name', value)}
          placeholder="Seu nome completo"
          value={form.name}
        />
        <AppTextInput
          autoCapitalize="none"
          error={errors.email}
          keyboardType="email-address"
          label="E-mail"
          onChangeText={(value) => updateField('email', value)}
          placeholder="seuemail@exemplo.com"
          value={form.email}
        />
        <AppTextInput
          error={errors.cpf}
          keyboardType="number-pad"
          label="CPF"
          onChangeText={(value) => updateField('cpf', formatCPF(value))}
          placeholder="000.000.000-00"
          value={form.cpf}
        />
        <AppTextInput
          error={errors.phone}
          keyboardType="number-pad"
          label="Celular"
          onChangeText={(value) => updateField('phone', formatPhone(value))}
          placeholder="(00) 00000-0000"
          value={form.phone}
        />
        <AppTextInput
          error={errors.cep}
          keyboardType="number-pad"
          label="CEP"
          onChangeText={(value) => updateField('cep', formatCEP(value))}
          placeholder="00000-000"
          value={form.cep}
        />
        <AppTextInput
          error={errors.password}
          label="Senha"
          onChangeText={(value) => updateField('password', value)}
          placeholder="Crie uma senha"
          secureTextEntry
          value={form.password}
        />
        <AppTextInput
          error={errors.confirmPassword}
          label="Confirmar senha"
          onChangeText={(value) => updateField('confirmPassword', value)}
          placeholder="Repita a senha"
          secureTextEntry
          value={form.confirmPassword}
        />

        <SubmitWrapper>
          <AppButton onPress={handleSubmit} title="Cadastrar" />
        </SubmitWrapper>
      </Form>
    </AuthLayout>
  );
}
