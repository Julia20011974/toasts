import { useEffect } from 'react';
import { DELAY } from '@/constants';

export const useAutoCloseToast = (toasts, remove) => {
  useEffect(() => {
    if (toasts.length) {
      const { id } = toasts[toasts.length - 1];
      const { time } = toasts[toasts.length - 1];
      setTimeout(() => remove(id)(), time || DELAY);
    }
  });
};
