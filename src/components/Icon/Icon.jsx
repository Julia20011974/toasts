import React from 'react';
import { Image } from './style';
import { getImage } from '@/helpers/getImage';

export function Icon({ img }) {
  console.log(getImage(img));
  return <Image img={getImage(img)} />;
}
