import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CouponCodeScreen } from '../screens/CouponCodeScreen';
import { CouponDetailScreen } from '../screens/CouponDetailScreen';
import { CouponsScreen } from '../screens/CouponsScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={RegisterScreen} name="Register" />
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
        <Stack.Screen component={CouponsScreen} name="Coupons" />
        <Stack.Screen component={ProfileScreen} name="Profile" />
        <Stack.Screen component={CouponDetailScreen} name="CouponDetail" />
        <Stack.Screen component={CouponCodeScreen} name="CouponCode" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
