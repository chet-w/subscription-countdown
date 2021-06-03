import React, { ReactElement } from "react";
import { Modal } from "../Modal";
import { EditServiceModalProps } from "./types";

export function EditServiceModal(props: EditServiceModalProps): ReactElement {
  return (
    <Modal
      id={`edit-${props.service.name.replace(" ", "-")}`}
      title={`Edit ${props.service.name}`}
    >
      <div> content</div>
    </Modal>
  );
}
