import PageWrapper from '../../components/PageWrapper';
import Career from './components/Career';
import Education from './components/Education';
import SimpleInfo from './components/SimpleInfo';

const About = () => {
  return (
    <PageWrapper>
      <SimpleInfo />
      <Education />
      <Career />
    </PageWrapper>
  );
};

export default About;
