import { useState, useEffect } from 'react';
import { getPosition } from '@/helpers/getPosition';

export const useToastPortal = (position) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal`);

  useEffect(() => {
    console.log('position');
    const div = document.createElement('div');
    div.id = portalId;
    div.style = `position: fixed; ${getPosition(position)}`;
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName('body')[0].removeChild(div);
  }, [portalId, getPosition]);

  return {
    loaded,
    portalId
  };
};
