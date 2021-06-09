import React, { ReactElement } from "react";
import { useService } from "../../hooks/useService";
import { ServiceForm } from "../ServiceForm";
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
      <ServiceForm service={service} />
    </Modal>
  ) : null;
}
