import { ReactElement } from "react";
import { useModal } from "../../providers/ModalProvider";
import { Modal } from "../Modal";
import { ServiceForm } from "../ServiceForm";
import { NewServiceModalProps } from "./types";

export function NewServiceModal(props: NewServiceModalProps): ReactElement {
  const { closeModal } = useModal();

  return (
    <Modal id="new-service" title="New Service">
      <ServiceForm formButtonLabels={["Cancel", "Create Service"]} />
    </Modal>
  );
}
