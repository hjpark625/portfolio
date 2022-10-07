import styled from 'styled-components';

const PortfolioItem = styled.div<{ isNight: boolean }>`
  width: inherit;
  height: 350px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 8px ${({ isNight }) => (isNight ? 'white' : 'gray')};
  transition: all 0.2s ease;
  & + & {
    margin-top: 30px;
  }
  :hover {
    transform: scale(1.02);
  }
`;

const PortFolioTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const MainContentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThumnailImg = styled.img<{ isNight: boolean }>`
  border-radius: 8px;
  box-shadow: 0px 0px 3px ${({ isNight }) => (isNight ? 'white' : 'gray')};
  width: 380px;
  height: 270px;
`;

const DescriptionBox = styled.div<{ isNight: boolean }>`
  box-shadow: 0px 0px 3px ${({ isNight }) => (isNight ? 'white' : 'gray')};
  border-radius: 8px;
  width: 520px;
  padding: 0 10px 10px;
`;

const SemiTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.span`
  font-size: 1rem;
  word-break: break-word;
`;

const DeployAndGitBox = styled.div`
  margin-top: 15px;
`;

const DeployPage = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

const NonDeployed = styled.span`
  color: lightgray;
  cursor: not-allowed;
`;

const Repo = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: underline;
  }
`;

export {
  PortfolioItem,
  PortFolioTitle,
  MainContentBox,
  ThumnailImg,
  DescriptionBox,
  SemiTitle,
  Description,
  DeployAndGitBox,
  NonDeployed,
  DeployPage,
  Repo,
};
