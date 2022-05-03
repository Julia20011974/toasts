import { positions, DEFAULT_POSITION } from '@/constants';

export function getPosition(position) {
  return positions.has(position) ? positions.get(position) : DEFAULT_POSITION;
}
