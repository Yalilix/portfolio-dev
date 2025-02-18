import { deprecatedRules } from 'eslint-plugin-react';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const StyledFooter = styled.footer`
  height: 50px;
  width: 100vw;
  background-color: #999999;
`;

export const StyledColorDiv = styled.div`
  background-color: ${({ $bgcolor }) => $bgcolor};
  cursor: pointer;
`;

//Deprecated;
