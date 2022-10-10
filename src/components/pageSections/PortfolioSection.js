import React from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';
import ProjectCard from '../molecules/ProjectCard';

import projects from '../../constants/projects';

const ProjectsContainer = styled.div`
  flex-direction: row;
  width: 100%;
  padding: 20px;
  max-width: 999px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const PortfolioSection = () => {
  return (
    <>
      <Subtitle dark="dark">Portfolio</Subtitle>
      <ProjectsContainer>
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </ProjectsContainer>
    </>
  );
};

export default PortfolioSection;
