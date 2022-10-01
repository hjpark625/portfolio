import styled from 'styled-components';

const ProfilePhotoWrapper = styled.div`
  display: flex;
`;

const ProfilePhoto = styled.img`
  width: 300px;
  height: 300px;
`;

const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

const InfoTitle = styled.span`
  margin-bottom: 20px;
  font-size: 32px;
`;

const Info = styled.li`
  list-style: inside;
  font-size: 24px;
  & + & {
    margin-top: 20px;
  }
`;

export { ProfilePhotoWrapper, ProfilePhoto, InfoWrapper, InfoTitle, Info };
