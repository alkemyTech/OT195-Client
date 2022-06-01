import React, { useContext } from "react";

import { DataTableContext } from "../../contexts/DataTableContext";
import { Container, CloseButton, Modal } from "react-bootstrap";

const FormModal = ({ children }) => {
  const { modal, actions } = useContext(DataTableContext);
  return (
    <Modal
      show={modal.modalOpen}
      onHide={() => modal.setModalOpen(false)}
      centered
      size="lg"
    >
      <Container fluid>
        <Modal.Header>
          <Modal.Title>
            {actions.showAdd ? "Nueva entrada" : null}
            {actions.showEdit ? "Editando entrada" : null}
          </Modal.Title>
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
