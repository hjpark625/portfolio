import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import Categories from './components/Categories';

const Home = () => {
  return (
    <PageWrapper>
      <HomtTitle>Welcome to my Introduce & Portfolio Web Site</HomtTitle>
      <HomeSection>
        <Categories />
      </HomeSection>
    </PageWrapper>
  );
};

export default Home;

const HomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomtTitle = styled.h1`
  text-align: center;
  font-size: 8rem;
  margin: 5rem auto 15rem;
`;
