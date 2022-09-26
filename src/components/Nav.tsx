import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faEarthAsia, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { handleToggle } from '../store/NightDay';
import * as S from './styles/Nav.styled';

interface ToggleValue {
  toggle: { toggle: boolean };
}

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nighMode = useSelector((state: ToggleValue) => state.toggle.toggle);

  const changePage = (path: string) => {
    navigate(path);
  };

  const changeToggleStatus = () => {
    dispatch(handleToggle());
  };

  return (
    <S.NavWrapper>
      <S.NavTitle
        onClick={() => {
          changePage('/');
        }}
      >
        <S.EarthIcon icon={faEarthAsia} />
        WELCOME
      </S.NavTitle>
      <S.MenuContents>
        {NAV_CONTENTS.map(({ id, title, path }) => (
          <S.Menu
            key={id}
            onClick={() => {
              changePage(path);
            }}
          >
            {title}
          </S.Menu>
        ))}
      </S.MenuContents>
      <S.NightDayHandlerWrapper>
        <S.NightDayHandler
          type="button"
          onClick={() => {
            changeToggleStatus();
          }}
        >
          <S.ButtonContainer>
            <S.DayButton icon={faSun} $nightMode={nighMode} />
            <S.NightButton icon={faMoon} $nightMode={nighMode} />
          </S.ButtonContainer>
        </S.NightDayHandler>
      </S.NightDayHandlerWrapper>
    </S.NavWrapper>
  );
};

export default Nav;

const NAV_CONTENTS = [
  { id: 1, title: 'About', path: '/about' },
  { id: 2, title: 'Gallery', path: '/gallery' },
  { id: 3, title: 'Portfolio', path: '/portfolio' },
];
