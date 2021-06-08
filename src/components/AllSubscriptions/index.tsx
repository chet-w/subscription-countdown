import { ReactElement } from "react";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceModal } from "../EditServiceModal";
import { useServices } from "../../providers/ServicesProvider";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  const { openModal } = useModal();
  const { services } = useServices();

  return (
    <S.Section>
      <Heading level="2">All Subscriptions</Heading>
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
