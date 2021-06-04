import React, { ReactElement } from "react";
import { useModal } from "../../providers/ModalProvider";
import { Modal } from "../Modal";
import { EditServiceModalProps } from "./types";

export function EditServiceModal(props: EditServiceModalProps): ReactElement {
  const { closeModal } = useModal();

  return (
    <Modal
      id={`edit-${props.service.name.replace(/\s/g, "-")}`}
      title={`Edit ${props.service.name}`}
      footerOptions={[
        { text: "Canel", onClick: () => closeModal() },
        { text: "UpdateService", onClick: () => closeModal() }
      ]}
    >
      <div> content</div>
    </Modal>
  );
}
