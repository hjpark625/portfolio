import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  z-index: 10;
`;

const NavTitle = styled.div`
  font-size: 26px;
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
  font-size: 26px;
  transition: background 0.2s ease;
  border-radius: 8px;
  padding: 10px;
  & + & {
    margin-left: 30px;
  }
  :hover {
    border-radius: 8px;
    background-color: #476778;
  }
`;

const NightDayHandlerWrapper = styled.div`
  position: relative;
`;

const NightDayHandler = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  padding: 20px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.2s ease;
  :hover {
    background-color: lightgray;
  }
`;

const NightButton = styled(FontAwesomeIcon)<{ $nightMode: boolean }>`
  bottom: 17%;
  right: 24%;
  position: absolute;
  color: #262e27;
  transition: all 0.3s ease;
  transform: ${({ $nightMode }) =>
    $nightMode ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(360deg)'};
  opacity: ${({ $nightMode }) => ($nightMode ? '1' : '0')};
  font-size: 26px;
`;

const DayButton = styled(FontAwesomeIcon)<{ $nightMode: boolean }>`
  bottom: 17%;
  right: 17%;
  position: absolute;
  color: #f7fcf9;
  transition: all 0.3s ease;
  transform: ${({ $nightMode }) =>
    $nightMode ? 'scale(0) rotate(0deg)' : 'scale(1) rotate(360deg)'};
  opacity: ${({ $nightMode }) => ($nightMode ? '0' : '1')};
  font-size: 26px;
`;

export {
  NavWrapper,
  NavTitle,
  EarthIcon,
  MenuContents,
  Menu,
  NightDayHandlerWrapper,
  NightDayHandler,
  ButtonContainer,
  NightButton,
  DayButton,
};
