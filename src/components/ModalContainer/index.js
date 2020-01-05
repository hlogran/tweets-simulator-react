import React from "react";
import { Modal } from "@material-ui/core";

import "./styles.scss";

export default function ModalContainer(props) {
  const { isOpenModal = false, closeModal, children } = props;
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
