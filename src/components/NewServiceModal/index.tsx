import React, { ReactElement } from "react";
import { useService } from "../../hooks/useService";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceForm } from "../EditServiceForm";
import { Modal } from "../Modal";
import { NewServiceModalProps } from "./types";

export function NewServiceModal(props: NewServiceModalProps): ReactElement {
  const { closeModal } = useModal();

  return (
    <Modal
      id="new-service"
      title="New Service"
      footerOptions={[
        { text: "Canel", onClick: () => closeModal() },
        { text: "Create Service", onClick: () => closeModal() }
      ]}
    >
      {/* <EditServiceForm /> */}
    </Modal>
  );
}
