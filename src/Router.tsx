import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import { RootState } from './store';
import { lightTheme } from './styles/light';
import { darkTheme } from './styles/dark';

const Router = () => {
  const toggleValue = useSelector((state: RootState) => state.toggle.isNight);

  return (
    <ThemeProvider theme={!toggleValue ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default Router;
