import ParticlesBg from 'particles-bg';
import './App.css';
import SectionContainer from './components/SectionContainer';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';

function App() {
  const config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: 'center', // all or center or {x:1,y:1,width:100,height:100}
    color: ['random', '#ff0000'],
    cross: 'dead', // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
  };

  const handleClickPortfolio = () => {
    console.log('portfolio');
  };

  return (
    <>
      <SectionContainer style={{ backgroundColor: 'rgba(0, 0, 0, 0.66)'}}>
        <ParticlesBg type="cobweb" config={config} bg={true} />
        <Title>Sophie Haugland</Title>
        <Subtitle>Front-end developer</Subtitle>
        <Button text="Portfolio" handleClick={handleClickPortfolio} />
      </SectionContainer>
      <SectionContainer>

      </SectionContainer>
    </>
  );
}

export default App;
