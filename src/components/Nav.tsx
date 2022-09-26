import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { handleToggle } from '../store/NightDay';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changePage = (path: string) => {
    navigate(path);
  };

  const changeToggle = () => {
    dispatch(handleToggle());
  };
  return (
    <NavWrapper>
      <NavTitle
        onClick={() => {
          changePage('/');
        }}
      >
        <EarthIcon icon={faEarthAsia} />
        WELCOME
      </NavTitle>
      <MenuContents>
        {NAV_CONTENTS.map(({ id, title, path }) => (
          <Menu
            key={id}
            onClick={() => {
              changePage(path);
            }}
          >
            {title}
          </Menu>
        ))}
      </MenuContents>
      <NightDayHandlerWrapper>
        <NightDayHandler type="checkbox" onClick={changeToggle} />
      </NightDayHandlerWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NAV_CONTENTS = [
  { id: 1, title: 'About', path: '/about' },
  { id: 2, title: 'Gallery', path: '/gallery' },
  { id: 3, title: 'Portfolio', path: '/portfolio' },
];
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 15px;
  background-color: #455964;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const NavTitle = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const EarthIcon = styled(FontAwesomeIcon)`
  margin: 0 10px;
  color: #9ae6c3;
`;

const MenuContents = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
  padding: 10px;
  & + & {
    margin-left: 30px;
  }

  &:hover {
    border-radius: 8px;
    background-color: green;
  }
`;

const NightDayHandlerWrapper = styled.div``;

const NightDayHandler = styled.input`
  cursor: pointer;
`;
