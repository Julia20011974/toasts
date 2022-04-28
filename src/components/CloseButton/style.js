import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => props.color};
  background: transparent;
  border: medium none;
  font-size: 20px;
  cursor: pointer;
  float: right;
`;
