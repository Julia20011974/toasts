import React, { useRef } from 'react';
import { ToastPortal } from '@/containers/ToastPortal';
import { DELAY, positions, images, animations } from '@/constants';

export default {
  title: 'Toasts',
  component: ToastPortal,
  argTypes: {
    img: {
      options: Array.from(images.keys()),
      control: { type: 'select' }
    },
    animation: {
      options: Array.from(animations.keys()),
      control: { type: 'select' }
    },
    position: {
      options: Array.from(positions.keys()),
      control: { type: 'select' }
    }
  }
};

function Toasts(args) {
  const toastRef = useRef();

  const show = () => {
    toastRef.current.add({ ...args });
  };

  return (
    <>
      <button type='button' onClick={show}>
        show
      </button>
      <ToastPortal ref={toastRef} position={args.position} />
    </>
  );
}

export const Example = Toasts.bind({});
Example.args = {
  img: 'info',
  backgroundColor: '#9933CC',
  color: 'white',
  msg: 'info toast example',
  time: DELAY,
  margin: '10px',
  animation: 'zoom',
  position: 'top-right'
};
