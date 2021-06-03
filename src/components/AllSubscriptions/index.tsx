import { ReactElement, useState } from "react";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { Service as ServiceType } from "../../types/Service";
import { data } from "../../dummy.js";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceModal } from "../EditServiceModal";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  // @ts-ignore
  const [services] = useState<ServiceType[]>(data);
  const { openModal } = useModal();

  return (
    <S.Section>
      <Heading level="2">All Subscriptions</Heading>
      <S.ServiceContainer>
        {services.map((service) => (
          <Service
            {...service}
            onClick={() => openModal(<EditServiceModal service={service} />)}
          />
        ))}
      </S.ServiceContainer>
    </S.Section>
  );
}
