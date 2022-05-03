import question from '@/images/question.svg';
import success from '@/images/success.svg';
import warning from '@/images/warning.svg';
import error from '@/images/error.svg';
import { reversal, zoom } from './animations';

export const DELAY = 1000;
export const positions = new Map([
  ['top-right', 'top: 30px; right: 10px'],
  ['top-left', 'top: 30px; left: 10px'],
  ['top-center', 'top: 30px; left: 40%'],
  ['bottom-left', 'bottom: 10px; left: 10px'],
  ['bottom-right', 'bottom: 10px; right: 10px'],
  ['bottom-center', 'bottom: 10px; left:40%']
]);
export const images = new Map([
  ['info', question],
  ['success', success],
  ['warning', warning],
  ['error', error]
]);
export const animations = new Map([
  ['zoom', zoom],
  ['reversel', reversal]
]);
