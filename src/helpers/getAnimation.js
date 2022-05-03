import { animations, DEFAULT_ANIMATIONS } from '@/constants';

export function getAnimation(animation) {
  return animations.has(animation) ? animations.get(animation) : DEFAULT_ANIMATIONS;
}
