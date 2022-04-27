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
  background: rgba(255, 102, 204, 0.9);
  animation: ${loading} ${(props) => props.time}ms linear forwards;
`;
