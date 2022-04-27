import React from 'react';
import { Button } from './style';

export function CloseButton({ bg, label }) {
  return <Button bg={bg}>{label}</Button>;
}
