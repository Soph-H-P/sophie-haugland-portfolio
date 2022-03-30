import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import PreviewModal from '../atoms/PreviewModal';

const ProjectCardContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
  position: relative;

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

const ProjectCard = ({ imgSrc, projectName, description, siteLink }) => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const showModal = (e) => {
    setPreviewModalOpen(true);
    console.log('tricked you!!!');
  };

  const handleCancel = () => {
    setPreviewModalOpen(false);
    console.log(previewModalOpen);
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
      ></PreviewModal>
      <ProjectCardContainer
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          showModal(e);
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
