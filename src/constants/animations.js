import { keyframes } from 'styled-components';

export const reversal = keyframes`
0%{
  transform: rotateY(180deg);
}
100%{
  transform: rotateY(360deg);
}
`;
export const zoom = keyframes`
0%{
  transform:scale(0.5)  
}
100%{
  transform:scale(1) 
}
`;
