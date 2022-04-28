import { useState, useEffect, useCallback } from 'react';

export const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal`);

  const getPosition = useCallback(() => {
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
  }, [position]);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    div.style = `position: fixed; ${getPosition()}`;
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName('body')[0].removeChild(div);
  }, [portalId, getPosition]);

  return {
    loaded,
    portalId
  };
};
