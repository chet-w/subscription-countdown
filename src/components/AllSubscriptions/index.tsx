import { ReactElement } from "react";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceModal } from "../EditServiceModal";
import { useServices } from "../../providers/ServicesProvider";
import { Button } from "../Button";
import { NewServiceModal } from "../NewServiceModal";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  const { openModal } = useModal();
  const { services } = useServices();

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
      <S.ServiceContainer>
        {services.map((service) => (
          <Service
            {...service}
            key={JSON.stringify(service)}
            onClick={() =>
              openModal(<EditServiceModal serviceId={service.id} />)
            }
          />
        ))}
      </S.ServiceContainer>
    </S.Section>
  );
}
