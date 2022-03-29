import React from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';
import ProjectCard from '../molecules/ProjectCard';

import bugBlog from '../../assets/images/bug-blog.png';
import arcticMuseum from '../../assets/images/arctic-museum.png';
import rainyDays from '../../assets/images/rainy-days.png';
import tracks from '../../assets/images/tracks.png';
import happyPlace from '../../assets/images/happy-place.png';
import osloBikes from '../../assets/images/oslo-bikes.png';
import comfyHome from '../../assets/images/comfy-home.png';
import progress from '../../assets/images/progress.png';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 999px;
  margin: 40px auto;
`;

const PortfolioSection = () => {
  return (
    <>
      <Subtitle dark="dark">Portfolio</Subtitle>
      <ProjectsContainer>
        <ProjectCard
          imgSrc={bugBlog}
          projectName="Bug Blog"
          description="A simple blog about coding bugs"
        />
        <ProjectCard
          imgSrc={arcticMuseum}
          projectName="Arctic Museum"
          description="A site to showcase a science museum."
        />
        <ProjectCard
          imgSrc={rainyDays}
          projectName="Rainy Days"
          description="E-commerce site displaying and selling rainwear"
        />
        <ProjectCard
          imgSrc={tracks}
          projectName="Tracks"
          description="E-commerce site displaying and selling shoes"
        />
        <ProjectCard
          imgSrc={happyPlace}
          projectName="Happy Place"
          description="Fetching life quality information."
        />
        <ProjectCard
          imgSrc={osloBikes}
          projectName="Oslo Bikes"
          description="Discover free bikes and parking spaces"
        />
        <ProjectCard
          imgSrc={comfyHome}
          projectName="Comfy Home"
          description="Interior design store"
        />
        <ProjectCard
          imgSrc={progress}
          projectName="Study Progress"
          description="Site to display current progress through studies"
        />
      </ProjectsContainer>
    </>
  );
};

export default PortfolioSection;
