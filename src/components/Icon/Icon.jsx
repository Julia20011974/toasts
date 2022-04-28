import React from 'react';
import { Image } from './style';
import { getImage } from '@/helpers/getImage';

export function Icon({ img }) {
  return <Image src={getImage(img)} />;
}
