import React from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.min.css';

const StyledModal = styled(Modal)`
  //   .ant-modal-content {
  //     border-radius: 30px;
  //     height: 100%;
  //   }
  //   .ant-modal-header {
  //     border-radius: 30px;
  //     border: 0;
  //   }
  //   .ant-modal-footer {
  //     border: 0;
  //     padding: 20px;
  //     & div {
  //       display: flex;
  //       justify-content: space-evenly;
  //     }
  //   }
  //   .ant-modal-close {
  //     display: none;
  //   }
  //   .ant-modal-title {
  //     text-align: center;
  //   }
`;

const PreviewModal = ({
  projectName,
  previewModalOpen,
  siteLink,
  handleCancel,
}) => {

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
          <iframe src={siteLink} width="500px" height="500px" title={projectName}></iframe>
        )}
      </StyledModal>
    </>
  );
};

export default PreviewModal;
