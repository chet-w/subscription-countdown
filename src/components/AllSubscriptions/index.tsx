import React, { ReactElement } from "react";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceModal } from "../EditServiceModal";
import { useServices } from "../../providers/ServicesProvider";
import { Button } from "../Button";
import { NewServiceModal } from "../NewServiceModal";
import { useNotification } from "../../providers/NotificationProvider";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  const { openModal } = useModal();
  const { services } = useServices();
  const notification = useNotification();

  return (
    <S.Section>
      <S.Header>
        <Heading level="2">All Subscriptions</Heading>
        <Button
          variant="primary"
          onClick={() => openModal(<NewServiceModal />)}
        >
          New Service
        </Button>
      </S.Header>
      <Button variant="secondary" onClick={() => notification.success("yes!")}>
        Notification
      </Button>
      <S.ServiceContainer>
        {services.map(service => (
          <Service
            {...service}
            key={JSON.stringify(service)}
            onClick={() =>
              openModal(<EditServiceModal serviceId={service.id!} />)
            }
          />
        ))}
      </S.ServiceContainer>
    </S.Section>
  );
}
