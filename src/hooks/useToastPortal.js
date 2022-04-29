import { useState, useEffect } from 'react';
import { getPosition } from '@/helpers';

export const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    div.style = `position: fixed; ${getPosition(position)}`;
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName('body')[0].removeChild(div);
  }, [portalId, position]);

  return {
    loaded,
    portalId
  };
};
