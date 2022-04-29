export function getPosition(position) {
  switch (position) {
    case 'top-left':
      return 'top: 30px; left: 10px';
    case 'top-center':
      return 'top: 30px; left: 40%';
    case 'bottom-left':
      return 'bottom: 10px; left: 10px';
    case 'bottom-right':
      return 'bottom: 10px; right: 10px';
    case 'bottom-center':
      return 'bottom: 10px; left:40%';
    default:
      return 'top: 30px; right: 10px';
  }
}
