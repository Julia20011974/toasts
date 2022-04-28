import React from 'react';
import { Image } from './style';
import { getImage } from '@/helpers/getImage';
import question from '../../images/question.svg';

export function Icon({ img }) {
  console.log(getImage(img));
  return <Image img={question} />;
}
