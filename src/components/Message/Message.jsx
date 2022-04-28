import React from 'react';
import { Text } from './style';

export function Message({ msg, color }) {
  return <Text color={color}>{msg}</Text>;
}
