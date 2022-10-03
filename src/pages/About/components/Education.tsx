import * as S from './styles/Education.styled';

const Education = () => {
  return (
    <S.EducationWrapper>
      <S.EducationTitle>Education.</S.EducationTitle>
      {EDUCATION_DATA.map(({ id, univ, major_degree, study_period }) => (
        <S.EducationsContainer key={id}>
          <S.Educations>{univ}</S.Educations>
          <div>
            <S.MajorAndDegree>{major_degree}</S.MajorAndDegree>
            <S.StudyPeriod>{study_period}</S.StudyPeriod>
          </div>
        </S.EducationsContainer>
      ))}
    </S.EducationWrapper>
  );
};

export default Education;

const EDUCATION_DATA = [
  {
    id: 1,
    univ: '1. 한국외국어대학교 경영대학원',
    major_degree: '경영학 전공 / 석사',
    study_period: '2020. 09. ~ 2022. 08.',
  },
  {
    id: 2,
    univ: '2. 순천향대학교',
    major_degree: '법학 전공, 국제문화학 복수전공 / 학사',
    study_period: '2012. 03. ~ 2016. 02.',
  },
];
