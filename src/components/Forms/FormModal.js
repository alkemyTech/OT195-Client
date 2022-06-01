import React, { useContext } from "react";

import { DataTableContext } from "../../contexts/DataTableContext";
import { Container, Col, Row, CloseButton, Modal } from "react-bootstrap";

const FormModal = ({ children }) => {
  const { modal } = useContext(DataTableContext);
  return (
    <Modal
      show={modal.modalOpen}
      onHide={() => modal.setModalOpen(false)}
      centered
      size="lg"
    >
      <Container fluid>
        <Modal.Header>
          <CloseButton
            aria-label="Hide"
            onClick={() => modal.setModalOpen(false)}
          />
        </Modal.Header>

        <Modal.Body>{children}</Modal.Body>
      </Container>
    </Modal>
  );
};

export default FormModal;
