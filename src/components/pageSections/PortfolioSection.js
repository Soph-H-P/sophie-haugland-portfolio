import React from 'react';
import styled from 'styled-components';

import Subtitle from '../atoms/Subtitle';
import ProjectCard from '../molecules/ProjectCard';

import projects from '../../constants/projects';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 999px;
  margin: 40px auto;

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
          return (
            <ProjectCard
              key={project.name}
              project={project}
            />
          );
        })}
      </ProjectsContainer>
    </>
  );
};

export default PortfolioSection;
