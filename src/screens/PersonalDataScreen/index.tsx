import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { AppTextInput } from '../../components/AppTextInput';
import { AppToast } from '../../components/AppToast';
import { ScreenHeader } from '../../components/ScreenHeader';
import { customer } from '../../mocks/customer';
import type { RootStackParamList } from '../../navigation/types';
import { formatCEP, onlyDigits } from '../../utils/masks';
import {
  Content,
  Description,
  Form,
  SafeArea,
  Screen,
  SubmitWrapper,
} from './styles';

type PersonalDataScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonalData'
>;

type PersonalDataErrors = {
  name?: string;
  cep?: string;
};

export function PersonalDataScreen({ navigation }: PersonalDataScreenProps) {
  const [name, setName] = useState(customer.name);
  const [cep, setCep] = useState(customer.cep);
  const [errors, setErrors] = useState<PersonalDataErrors>({});
  const [isToastVisible, setIsToastVisible] = useState(false);

  function clearFieldError(field: keyof PersonalDataErrors) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];

      return nextErrors;
    });
  }

  function validateForm() {
    const nextErrors: PersonalDataErrors = {};

    if (!name.trim()) {
      nextErrors.name = 'Informe seu nome completo.';
    }

    if (onlyDigits(cep).length !== 8) {
      nextErrors.cep = 'Informe um CEP com 8 dígitos.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSave() {
    if (!validateForm()) {
      return;
    }

    setIsToastVisible(true);
  }

  return (
    <Screen>
      <SafeArea edges={['top', 'bottom']}>
        <Content>
          <ScreenHeader
            onBack={() => navigation.goBack()}
            title="Dados pessoais"
          />

          <AppCard>
            <Description>
              Atualize os dados permitidos. CPF, e-mail e celular ficam apenas
              para consulta.
            </Description>

            <Form>
              <AppTextInput
                autoCapitalize="words"
                error={errors.name}
                label="Nome"
                onChangeText={(value) => {
                  setName(value);
                  clearFieldError('name');
                }}
                placeholder="Seu nome completo"
                value={name}
              />

              <AppTextInput
                editable={false}
                label="CPF"
                placeholder="000.000.000-00"
                value={customer.cpf}
              />

              <AppTextInput
                autoCapitalize="none"
                editable={false}
                keyboardType="email-address"
                label="E-mail"
                placeholder="seuemail@exemplo.com"
                value={customer.email}
              />

              <AppTextInput
                editable={false}
                keyboardType="phone-pad"
                label="Celular"
                placeholder="(00) 00000-0000"
                value={customer.phone}
              />

              <AppTextInput
                error={errors.cep}
                keyboardType="number-pad"
                label="CEP"
                onChangeText={(value) => {
                  setCep(formatCEP(value));
                  clearFieldError('cep');
                }}
                placeholder="00000-000"
                value={cep}
              />
            </Form>
          </AppCard>

          <SubmitWrapper>
            <AppButton onPress={handleSave} title="Salvar dados" />
          </SubmitWrapper>
        </Content>
      </SafeArea>

      <AppToast
        message="Dados atualizados visualmente neste protótipo."
        onHide={() => setIsToastVisible(false)}
        visible={isToastVisible}
      />
    </Screen>
  );
}
