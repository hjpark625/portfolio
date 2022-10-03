import styled from 'styled-components';

const EducationWrapper = styled.div`
  margin-top: 10rem;
`;

const EducationTitle = styled.h2`
  font-size: 4rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

const EducationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Educations = styled.span`
  font-size: 28px;
`;

const MajorAndDegree = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const StudyPeriod = styled.div`
  font-size: 20px;
  text-align: center;
`;

export {
  EducationTitle,
  EducationWrapper,
  EducationsContainer,
  Educations,
  MajorAndDegree,
  StudyPeriod,
};
