import React from 'react';
import { DELAY } from '@/constants';
import { Message } from '@/components/Message';
import { ToastWrapper, ContentWrapper } from './style';
import { CloseButton } from '@/components/CloseButton';
import { Icon } from '@/components/Icon';
import { ProgressLabel } from '@/components/ProgressLabel';

export function Toast({ backgroundColor, color, img, msg, time, margin, animation, onClose }) {
  return (
    <ToastWrapper backgroundColor={backgroundColor} margin={margin} animation={animation}>
      <CloseButton onClose={onClose} color={color} />
      <ContentWrapper>
        <Icon img={img} />
        <Message msg={msg} color={color} />
      </ContentWrapper>
      <ProgressLabel time={time} />
    </ToastWrapper>
  );
}

Toast.defaultProps = {
  backgroundColor: '#9933CC',
  color: 'white',
  img: 'info',
  msg: 'info toast example',
  time: DELAY,
  margin: '10px',
  animation: 'zoom'
};
