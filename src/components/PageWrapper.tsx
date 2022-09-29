import React from 'react';
import styled from 'styled-components';

interface IChildren {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: IChildren) => {
  return <AllPageWrapper>{children}</AllPageWrapper>;
};

export default PageWrapper;

const AllPageWrapper = styled.section`
  width: 1000px;
  height: auto;
  margin: 0 auto;
  margin-top: 120px;
`;
