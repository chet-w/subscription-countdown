import React, { ReactElement } from "react";
import { useService } from "../../hooks/useService";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceForm } from "../EditServiceForm";
import { Modal } from "../Modal";
import { EditServiceModalProps } from "./types";

export function EditServiceModal(
  props: EditServiceModalProps
): ReactElement | null {
  const { closeModal } = useModal();
  const { service } = useService(props.serviceId);

  return service ? (
    <Modal
      id={`edit-${service.name.replace(/\s/g, "-")}`}
      title={`Edit ${service.name}`}
      footerOptions={[
        { text: "Canel", onClick: () => closeModal() },
        { text: "UpdateService", onClick: () => closeModal() }
      ]}
    >
      <EditServiceForm service={service} />
    </Modal>
  ) : null;
}
