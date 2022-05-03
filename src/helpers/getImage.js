import { images, DEFAULT_IMAGES } from '@/constants';

export function getImage(img) {
  return images.has(img) ? images.get(img) : DEFAULT_IMAGES;
}
