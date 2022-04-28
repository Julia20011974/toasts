import React from 'react';
import { Button } from './style';

export function CloseButton({ onClose, color }) {
  return (
    <Button color={color} onClick={onClose}>
      X
    </Button>
  );
}
