import styled from 'styled-components';
import { getAnimation } from '@/helpers/getAnimation';

export const ToastWrapper = styled.div`
  margin: ${(props) => props.margin} 0;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  animation: ${(props) => getAnimation(props.animation)} 0.1s linear forwards;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 15px 0;
`;
