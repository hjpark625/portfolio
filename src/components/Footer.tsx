import styled from 'styled-components';

const Footer = () => {
  return (
    <CopyRightFooter>
      &copy; 2022. Heeju Park all rights reserved.
    </CopyRightFooter>
  );
};

export default Footer;

const CopyRightFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 30px;
  border-top: 2px solid lightgray;
  background-color: inherit;
  margin-top: 10rem;
`;
