import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LogOut, Mail, Phone, UserRound } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { AppButton } from '../../components/AppButton';
import { AppCard } from '../../components/AppCard';
import { IconBadge } from '../../components/IconBadge';
import { ScreenHeader } from '../../components/ScreenHeader';
import { customer } from '../../mocks/customer';
import type { RootStackParamList } from '../../navigation/types';
import {
  ActionWrapper,
  Avatar,
  AvatarInitials,
  CardSection,
  Content,
  DataContent,
  DataLabel,
  DataRow,
  DataValue,
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

function getCustomerInitials(name?: string) {
  const fallbackInitials = 'CL';
  const normalizedName = name?.trim();

  if (!normalizedName) {
    return fallbackInitials;
  }

  const initials = normalizedName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0])
    .join('')
    .toUpperCase();

  return initials || fallbackInitials;
}

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const theme = useTheme();
  const customerName = customer.name || 'Cliente';
  const customerEmail = customer.email || 'E-mail não informado';
  const customerPhone = customer.phone || 'Não informado';

  return (
    <Screen>
      <SafeArea edges={['top', 'bottom']}>
        <Content>
          <ScreenHeader onBack={() => navigation.goBack()} title="Perfil" />

          <HeaderCard>
            <AppCard>
              <HeaderInfo>
                <Avatar>
                  <AvatarInitials>{getCustomerInitials(customer.name)}</AvatarInitials>
                </Avatar>

                <CardSection>
                  <Name>{customerName}</Name>
                  <Subtitle>{customerEmail}</Subtitle>
                </CardSection>
              </HeaderInfo>
            </AppCard>
          </HeaderCard>

          <SectionTitle>Dados pessoais</SectionTitle>

          <AppCard>
            <DataRow>
              <IconBadge size="sm" shape="rounded">
                <UserRound
                  color={theme.colors.primary}
                  size={22}
                  strokeWidth={1.8}
                />
              </IconBadge>

              <DataContent>
                <DataLabel>Nome</DataLabel>
                <DataValue>{customerName}</DataValue>
              </DataContent>
            </DataRow>

            <DataRow>
              <IconBadge size="sm" shape="rounded">
                <Mail color={theme.colors.primary} size={22} strokeWidth={1.8} />
              </IconBadge>

              <DataContent>
                <DataLabel>E-mail</DataLabel>
                <DataValue>{customerEmail}</DataValue>
              </DataContent>
            </DataRow>

            <DataRow>
              <IconBadge size="sm" shape="rounded">
                <Phone color={theme.colors.primary} size={22} strokeWidth={1.8} />
              </IconBadge>

              <DataContent>
                <DataLabel>Telefone</DataLabel>
                <DataValue>{customerPhone}</DataValue>
              </DataContent>
            </DataRow>
          </AppCard>

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
