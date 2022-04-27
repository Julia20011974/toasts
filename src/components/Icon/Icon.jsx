import React from 'react';
import { Image } from './style';
import { getImage } from '@/helpers/getImage';

export function Icon({ img }) {
  return <Image img={getImage(img)} />;
}
