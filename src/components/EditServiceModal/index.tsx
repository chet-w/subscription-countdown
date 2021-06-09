import React, { ReactElement } from "react";
import { useService } from "../../hooks/useService";
import { EditServiceForm } from "../EditServiceForm";
import { Modal } from "../Modal";
import { EditServiceModalProps } from "./types";

export function EditServiceModal(
  props: EditServiceModalProps
): ReactElement | null {
  const { service } = useService(props.serviceId);

  return service ? (
    <Modal
      id={`edit-${service.name.replace(/\s/g, "-")}`}
      title={`Edit ${service.name}`}
    >
      <EditServiceForm service={service} />
    </Modal>
  ) : null;
}
