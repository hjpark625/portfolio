import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export { CustomLink, CategoryBox, CategoryTitle, CategoryImg, CategoryDesc };
