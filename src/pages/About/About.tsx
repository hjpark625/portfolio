import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <ProfilePhotoWrapper>
        <ProfilePhoto alt="프로필 사진" src="/images/profile.jpg" />

        <InfoWrapper>
          <InfoTitle>Simple Infos about me</InfoTitle>
          {INFO_LISTS.map(({ id, title, text }) => (
            <Info key={id}>
              {title}: {text}
            </Info>
          ))}
        </InfoWrapper>
      </ProfilePhotoWrapper>
    </PageWrapper>
  );
};

export default About;

const INFO_LISTS = [
  { id: 1, title: '이 름', text: '박희주' },
  { id: 2, title: '나 이', text: '1993년생' },
  { id: 3, title: '포 지 션', text: 'Web Front-End Dev' },
];

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
