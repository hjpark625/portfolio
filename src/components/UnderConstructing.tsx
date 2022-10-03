import React from 'react';
import styled from 'styled-components';

const UnderConstructing = () => {
  return <ConstructionTitle>작업 중인 페이지 입니다.</ConstructionTitle>;
};

export default UnderConstructing;

const ConstructionTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: lightgray;
  text-decoration: underline;
`;
