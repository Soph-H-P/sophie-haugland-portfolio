import React, { useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.min.css';

import Loader from './Loader';
import { StyledATag } from './StyledAnchor';

const StyledModal = styled(Modal)`
  width: 100% !important;
  max-width: 1100px;

  .ant-modal-content {
    width: 100%;
  }

  .ant-modal-body {
    display: flex;
    width: 100%;
    font-size: 18px;
    padding: 10px 24px 24px 24px;
  }

  .ant-modal-header {
    border: 0;
    padding: 30px;
  }

  .ant-modal-title {
    font-size: 36px;
    text-align: center;
    border: 0;
  }

  .ant-modal-footer {
    border: 0;
    padding: 20px;
    & div {
      display: flex;
      justify-content: space-evenly;
    }
  }

  h3 {
    font-family: ${(props) => props.theme.headingFont};
    font-size: 21px;
  }

  @media (max-width: 760px) {
    .ant-modal-body {
      flex-direction: column;
      padding: 5px;
    }
  }
`;

const IframeContainer = styled.div`
  width: 50%;
  height: 400px;
  padding-right: 20px;
  overflow: hidden;
  position: relative;

  iframe {
    width: 134%;
    height: 134%;
    zoom: 0.75;
    border-radius: 5px;
    border-width: 30px 5px 5px 5px;
    border-color: ${(props) => props.theme.primaryColor};
    padding: 5px;
    -moz-transform: scale(0.75);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.75);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.75);
    -webkit-transform-origin: 0 0;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 300px;
    padding: 0 0 20px 0;

    iframe {
      zoom: 0.55;
      -moz-transform: scale(0.55);
      -moz-transform-origin: 0 0;
      -o-transform: scale(0.55);
      -o-transform-origin: 0 0;
      -webkit-transform: scale(0.55);
      -webkit-transform-origin: 0 0;
      width: 183%;
      height: 183%;
      margin-right: 0px;
    }
  }
`;

const InfoContainer = styled.div`
  width: 50%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:last-child {
    display: flex;
    align-self: end;
    align-items: center;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const PreviewModal = ({
  projectName,
  previewModalOpen,
  siteLink,
  handleCancel,
  projectType,
  longDescription,
  gitHub,
}) => {
  const [iFrameIsLoaded, setIFrameIsLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIFrameIsLoaded(true);
  };

  return (
    <>
      <StyledModal
        title={projectName}
        visible={previewModalOpen}
        footer={null}
        onCancel={handleCancel}
        centered
      >
        {siteLink && (
          <IframeContainer>
            <Loader isLoaded={iFrameIsLoaded} />
            <iframe src={siteLink} title={projectName} onLoad={handleIframeLoad}></iframe>
          </IframeContainer>
        )}
        <InfoContainer>
          <div>
            <h3>{projectType}</h3>
            <p>{longDescription}</p>
          </div>
          <div>
            <StyledATag text={'GitHub Repo'} href={gitHub} anchorType={'ghost'} target="_blank" />
            <StyledATag text={'Visit site'} href={siteLink} anchorType={'button'} target="_blank" />
          </div>
        </InfoContainer>
      </StyledModal>
    </>
  );
};

export default PreviewModal;
