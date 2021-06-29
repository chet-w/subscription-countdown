import React, { ReactElement } from "react";
import { Modal } from "../Modal";
import { ServiceForm } from "../ServiceForm";
import { NewServiceModalProps } from "./types";

export function NewServiceModal(props: NewServiceModalProps): ReactElement {
  return (
    <Modal id="new-service" title="New Service">
      <ServiceForm formButtonLabels={["Cancel", "Create Service"]} />
    </Modal>
  );
}
