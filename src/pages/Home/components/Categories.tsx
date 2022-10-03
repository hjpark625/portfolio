import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ToggleValue {
  toggle: { toggle: boolean };
}

const Categories = () => {
  const isNight = useSelector((state: ToggleValue) => state.toggle.toggle);

  return (
    <>
      {CATEGORIES_DATA.map(
        ({ id, title, img_url, img_alt, description, path }) => (
          <CustomLink key={id} to={path}>
            <CategoryBox isNight={isNight}>
              <CategoryTitle>{title}</CategoryTitle>
              <CategoryImg src={img_url} alt={img_alt} />
              <CategoryDesc>{description}</CategoryDesc>
            </CategoryBox>
          </CustomLink>
        ),
      )}
    </>
  );
};

export default Categories;

const CATEGORIES_DATA = [
  {
    id: 1,
    title: 'to About',
    img_url:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    img_alt: 'img',
    description: 'This page is about my information',
    path: '/about',
  },
  {
    id: 2,
    title: 'to Gallery',
    img_url:
      'https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    img_alt: 'img',
    description: 'This page is configured with my photos',
    path: '/gallery',
  },
  {
    id: 3,
    title: 'to Portfolio',
    img_url:
      'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    img_alt: 'img',
    description: 'This page is configured with my projects',
    path: '/portfolio',
  },
];

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CategoryBox = styled.div<{ isNight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  box-shadow: 0px 0px 8px ${({ isNight }) => (isNight ? 'white' : 'gray')};
  :hover {
    transform: scale(1.2);
  }
`;

const CategoryTitle = styled.span`
  font-size: 24px;
  font-weight: bolder;
`;

const CategoryImg = styled.img`
  border-radius: 8px;
  width: 250px;
  height: 250px;
`;

const CategoryDesc = styled.div`
  font-size: 20px;
`;
