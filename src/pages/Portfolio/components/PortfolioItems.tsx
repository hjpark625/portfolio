import { useSelector } from 'react-redux';
import * as S from './styles/PortfolioItems.styled';
import { RootState } from '../../../store';

const PortfolioItems = () => {
  const preventContextMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const isNight = useSelector((state: RootState) => state.toggle.isNight);
  return (
    <>
      {PORTFOLIO_DATA.map(
        ({
          id,
          title,
          img,
          alt,
          semi_title,
          description,
          deploy_page,
          github_repo,
        }) => (
          <S.PortfolioItem key={id} isNight={isNight}>
            <S.PortFolioTitle>{title}</S.PortFolioTitle>
            <S.MainContentBox>
              <S.ThumnailImg
                src={img}
                alt={alt}
                isNight={isNight}
                onContextMenu={preventContextMenu}
              />
              <S.DescriptionBox isNight={isNight}>
                <S.SemiTitle>{semi_title}</S.SemiTitle>
                <S.Description>{description}</S.Description>
                <S.DeployAndGitBox>
                  배포페이지:{' '}
                  {deploy_page.length > 0 ? (
                    <S.DeployPage href={deploy_page} target="_blank">
                      {deploy_page}
                    </S.DeployPage>
                  ) : (
                    <S.NonDeployed>미 배포 프로젝트</S.NonDeployed>
                  )}
                  <br />
                  Github Repo:{' '}
                  <S.Repo href={github_repo} target="_blank">
                    {github_repo}
                  </S.Repo>
                </S.DeployAndGitBox>
              </S.DescriptionBox>
            </S.MainContentBox>
          </S.PortfolioItem>
        ),
      )}
    </>
  );
};

export default PortfolioItems;

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: 'TodoApp with Firebase',
    img: '',
    alt: 'todoapp',
    semi_title: 'Firebase의 Realtime DB를 활용한 TodoApp',
    description:
      '기존에 Next.js로 TodoApp을 제작할 때 자체적으로 초기배열을 토대로 concat과 filter를 통해 CRUD를 구현했었으나 React.js로 구글 Firebase의 Realtime Database를 활용하여 유저의 로그인 / 로그아웃 기능 구현과 동시에 DB를 활용하여 CRUD를 구현한 단독 프로젝트입니다.디자인은 서적 "리액트를 다루는 기술"(저자: 김민준)에서 참고했습니다.',
    deploy_page: 'https://new-todos.vercel.app/',
    github_repo: 'https://github.com/hjpark625/new-todos',
  },
  {
    id: 2,
    title: 'TodoApp with Next.js',
    img: '',
    alt: 'todoapp',
    semi_title: 'Next.js를 적용한 TodoApp',
    description:
      'Next.js를 활용한 TodoApp 제작 개인프로젝트입니다. 2022년 8월 27일부터 9월 1일까지 기본 기능구현완료 후 9월 16일에 README작성을 완료했습니다. 10월 6일에 Redux를 적용하여 기존 useState를 활용했던 부분을 변환완료했으며 이를 통해 기본적인 Redux의 FLUX패턴을 확실하게 이해 할 수 있었고 Next.js를 적용함으로써 React의 CSR의 단점을 SSR을 통해 빠른 렌더링과 더 부드러운 UI를 제공이 가능하다는 점을 학습했습니다.',
    deploy_page: 'https://hjpark625.github.io/todo-next/',
    github_repo: 'https://github.com/hjpark625/todo-next',
  },
  {
    id: 3,
    title: '34-2nd-Greeneeds-frontend',
    img: '/images/portfolio/GREENEEDS(edit).gif',
    alt: 'Greeneeds',
    semi_title: '크라우드 펀딩사이트 Tumblbug을 모티브로 재구성한 프로젝트',
    description:
      'Nav 및 Footer 레이아웃 제작 / Nav바 로그인 여부에 따른 유저정보 표출 / 로그인 기능 구현(소셜로그인: 카카오)',
    deploy_page: '',
    github_repo: 'https://github.com/hjpark625/34-2nd-greeneeds-frontend',
  },
  {
    id: 4,
    title: '34-1st-Weneige-frontend',
    img: '/images/portfolio/WENEIGE_EDIT.gif',
    alt: 'Weneige',
    semi_title: '화장품사이트 Weneige를 모티브를 한 프로젝트',
    description:
      '메인페이지 이미지 슬라이드 기능 / 이미지 슬라이드 내 indicator버튼 기능 구현 / 검색창 및 검색 기능 구현 / 상품 리스트들에 대한 정렬버튼 기능 구현',
    deploy_page: '',
    github_repo: 'https://github.com/hjpark625/34-1st-Weneige-frontend',
  },
];
