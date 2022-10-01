import * as S from './styles/SimpleInfo.styled';

const SimpleInfo = () => {
  return (
    <S.ProfilePhotoWrapper>
      <S.ProfilePhoto alt="프로필 사진" src="/images/profile.jpg" />

      <S.InfoWrapper>
        <S.InfoTitle>Simple Infos about me</S.InfoTitle>
        {INFO_LISTS.map(({ id, title, text }) => (
          <S.Info key={id}>
            {title}: {text}
          </S.Info>
        ))}
      </S.InfoWrapper>
    </S.ProfilePhotoWrapper>
  );
};

export default SimpleInfo;

const INFO_LISTS = [
  { id: 1, title: '이 름', text: '박희주' },
  { id: 2, title: '나 이', text: '1993년생' },
  { id: 3, title: '포 지 션', text: 'Web Front-End Dev' },
];
