import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LogOut, Ticket, UserRound } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { ScreenHeader } from '../../components/ScreenHeader';
import { customer } from '../../mocks/customer';
import type { RootStackParamList } from '../../navigation/types';
import { getCustomerInitials } from '../../utils/customerInitials';
import {
  ActionWrapper,
  Avatar,
  AvatarImage,
  AvatarInitials,
  CardSection,
  Content,
  HeaderCard,
  HeaderInfo,
  Name,
  SafeArea,
  Screen,
  SectionTitle,
  Subtitle,
} from './styles';

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const theme = useTheme();
  const customerName = customer.name || 'Cliente';
  const customerEmail = customer.email || 'E-mail não informado';

  return (
    <Screen>
      <SafeArea edges={['top', 'bottom']}>
        <Content>
          <ScreenHeader onBack={() => navigation.goBack()} title="Perfil" />

          <HeaderCard>
            <AppCard>
              <HeaderInfo>
                <Avatar>
                  {customer.avatarUrl ? (
                    <AvatarImage
                      accessibilityLabel={`Foto de perfil de ${customerName}`}
                      source={{ uri: customer.avatarUrl }}
                    />
                  ) : (
                    <AvatarInitials>
                      {getCustomerInitials(customer.name)}
                    </AvatarInitials>
                  )}
                </Avatar>

                <CardSection>
                  <Name>{customerName}</Name>
                  <Subtitle>{customerEmail}</Subtitle>
                </CardSection>
              </HeaderInfo>
            </AppCard>
          </HeaderCard>

          <SectionTitle>Dados pessoais</SectionTitle>

          <AppButton
            icon={
              <UserRound
                color={theme.colors.primary}
                size={20}
                strokeWidth={1.9}
              />
            }
            onPress={() => navigation.navigate('PersonalData')}
            title="Acessar dados pessoais"
            variant="secondary"
          />

          <SectionTitle>Cupons</SectionTitle>

          <AppButton
            icon={
              <Ticket color={theme.colors.primary} size={20} strokeWidth={1.9} />
            }
            onPress={() => navigation.navigate('UnavailableCoupons')}
            title="Cupons usados e expirados"
            variant="secondary"
          />

          <ActionWrapper>
            <AppButton
              icon={<LogOut color={theme.colors.white} size={20} strokeWidth={1.9} />}
              onPress={() => navigation.replace('Login')}
              title="Sair da conta"
              variant="danger"
            />
          </ActionWrapper>
        </Content>
      </SafeArea>
    </Screen>
  );
}
