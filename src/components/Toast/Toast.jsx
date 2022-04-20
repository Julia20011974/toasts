import React from 'react';
import { Message } from '@/components/Message';
import { ToastWrapper } from './style';
import { CloseButton } from '@/components/CloseButton';
import { Icon } from '@/components/Icon';
import { ProgressLabel } from '@/components/ProgressLabel';

export function Toast() {
  return (
    <ToastWrapper>
      <Icon />
      <Message />
      <CloseButton />
      <ProgressLabel />
    </ToastWrapper>
  );
}
