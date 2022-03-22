import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SectionContainer from './components/SectionContainer';
import NavBar from './components/NavBar';
import HomeSection from './components/pageSections/HomeSection';
import Footer from './components/Footer';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [navIsFixed, setNavIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  useEffect(() => {
    const handleScrollPage = () => {
      setScrollHeight(window.pageYOffset);
      if (scrollHeight >= windowHeight) {
        setNavIsFixed(true);
      } else {
        setNavIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScrollPage);
    return () => window.removeEventListener('scroll', handleScrollPage);
  }, [scrollHeight]);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SectionContainer home={true} id="home" style={{ backgroundColor: 'rgba(0, 0, 0, 0.66)' }}>
        <HomeSection />
        <NavBar fixed={navIsFixed} />
      </SectionContainer>
      <SectionContainer id="portfolio">portfolio stuff</SectionContainer>
      <SectionContainer id="about">about stuff</SectionContainer>
      <SectionContainer id="contact">contact stuff</SectionContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
