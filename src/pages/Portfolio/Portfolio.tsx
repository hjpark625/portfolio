import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import PortfolioItems from './components/PortfolioItems';

const Portfolio = () => {
  return (
    <PageWrapper>
      <MainTitle>Portfolio Lists</MainTitle>
      <PortFolioSection>
        <PortfolioItems />
      </PortFolioSection>
    </PageWrapper>
  );
};

export default Portfolio;

const PortFolioSection = styled.section`
  width: 100%;
  height: auto;
`;

const MainTitle = styled.h1`
  font-family: monospace;
  font-size: 4rem;
  margin-bottom: 20px;
`;
