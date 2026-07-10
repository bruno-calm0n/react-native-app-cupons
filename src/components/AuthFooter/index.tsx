import type { TouchableOpacityProps } from 'react-native';

import { Action, ActionText, Container, Text } from './styles';

type AuthFooterProps = TouchableOpacityProps & {
  text: string;
  actionLabel: string;
};

export function AuthFooter({ text, actionLabel, ...props }: AuthFooterProps) {
  return (
    <Container>
      <Text>{text} </Text>
      <Action activeOpacity={0.7} {...props}>
        <ActionText>{actionLabel}</ActionText>
      </Action>
    </Container>
  );
}
