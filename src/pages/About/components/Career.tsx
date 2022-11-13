import React from 'react';
import * as S from './styles/Carrer.styled';

const Career = () => {
  return (
    <S.CareerWrapper>
      <S.CareerTitle>Career.</S.CareerTitle>
      {CAREER_DATA.map(({ id, occupation, role, working_period }) => (
        <S.CareerContainer key={id}>
          <S.Careers>{occupation}</S.Careers>
          <div>
            <S.MajorAndDegree>{role}</S.MajorAndDegree>
            <S.StudyPeriod>{working_period}</S.StudyPeriod>
          </div>
        </S.CareerContainer>
      ))}
    </S.CareerWrapper>
  );
};

export default Career;

const CAREER_DATA = [
  {
    id: 1,
    occupation: '1. 대한민국 육군',
    role: '중위 전역 / 측지 소대장, 본부 포대장',
    working_period: '2016. 03. ~ 2018. 06.',
  },
  {
    id: 2,
    occupation: '2. 대한민국 육군(재임용)',
    role: '대위 전역 / 관측장교, 본부 포대장, 군수과장',
    working_period: '2018. 12. ~ 2021. 11.',
  },
  {
    id: 3,
    occupation: '3. 모두 컴퍼니',
    role: 'Web Front-End Dev',
    working_period: '2022. 10. ~ 재직 중',
  },
];
