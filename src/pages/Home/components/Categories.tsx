import { useSelector } from 'react-redux';
import * as S from './styles/Categories.styled';

interface ToggleValue {
  toggle: { toggle: boolean };
}

const Categories = () => {
  const isNight = useSelector((state: ToggleValue) => state.toggle.toggle);

  return (
    <>
      {CATEGORIES_DATA.map(
        ({ id, title, img_url, img_alt, description, path }) => (
          <S.CustomLink key={id} to={path}>
            <S.CategoryBox isNight={isNight}>
              <S.CategoryTitle>{title}</S.CategoryTitle>
              <S.CategoryImg src={img_url} alt={img_alt} />
              <S.CategoryDesc>{description}</S.CategoryDesc>
            </S.CategoryBox>
          </S.CustomLink>
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
