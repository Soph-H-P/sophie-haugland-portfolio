import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import PreviewModal from '../atoms/PreviewModal';

const ProjectCardContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 270px;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
  white-space: unset;
  border: none;
  padding: 10px 5px;
  box-shadow: ${(props) => props.theme.boxShadowNone};

  img {
    width: 160px;
  }

  h3 {
    font-size: 28px;
    font-weight: normal;
    margin: 5px 0px;
  }

  p {
    font-size: 18px;
    margin: 5px;
    font-weight: 300;
  }

  &:hover {
    color: ${(props) => props.theme.darkFontColor};
    animation: cardpulse 0.6s ease;
    animation-iteration-count: 1;
  }

  &:focus {
    color: ${(props) => props.theme.darkFontColor};
  }

  @keyframes cardpulse {
    0% {
      transform: scale(1);
      box-shadow: ${(props) => props.theme.boxShadowNone};
    }
    50% {
      transform: scale(1.01);
      box-shadow: ${(props) => props.theme.boxShadow};
    }
    100% {
      transform: scale(1);
      box-shadow: ${(props) => props.theme.boxShadowNone};
    }
  }
`;

const ProjectCard = ({ imgSrc, projectName, description, siteLink, projectType, longDescription, gitHub }) => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);


  const showModal = () => {
    setPreviewModalOpen(true);
  };

  const handleCancel = () => {
    setPreviewModalOpen(false);
  };

  return (
    <>
      <PreviewModal
        previewModalOpen={previewModalOpen}
        setPreviewModalOpen={setPreviewModalOpen}
        projectName={projectName}
        siteLink={siteLink}
        showModal={showModal}
        handleCancel={handleCancel}
        projectType={projectType}
        longDescription={longDescription}
        gitHub={gitHub}
      ></PreviewModal>
      <ProjectCardContainer
        onClick={() => {
          showModal();
        }}
      >
        <img src={imgSrc} alt={projectName} />
        <h3>{projectName}</h3>
        <p>{description}</p>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
