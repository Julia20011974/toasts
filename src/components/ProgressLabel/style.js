import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0%{
    width: 100%;
  }
  100%{
   width: 0%;
  }
`;

export const Progress = styled.div`
  height: 5px;
  border-radius: 13px;
  background: rgba(100, 100, 100, 0.9);
  animation: ${loading} 500ms linear forwards;
`;
