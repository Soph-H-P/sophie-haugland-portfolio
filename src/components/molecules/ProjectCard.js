import React from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;

  img {
    width: 160px;
  }

  h3 {
    font-size: 28px;
    font-weight: normal;
    margin: 5px 0px;
  }

  p {
    font-size: 21px;
    margin: 5px;
    font-weight: 300;
  }
`;

const ProjectCard = ({ imgSrc, projectName, description }) => {
  return (
    <ProjectCardContainer>
      <img src={imgSrc} alt={projectName} />
      <h3>{projectName}</h3>
      <p>{description}</p>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
