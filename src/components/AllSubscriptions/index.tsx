import { ReactElement, useEffect, useState } from "react";
import { mapKeys, camelCase } from "lodash";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { Service as ServiceType } from "../../types/Service";
import { dummy } from "../../dummy";
import { useModal } from "../../providers/ModalProvider";
import { EditServiceModal } from "../EditServiceModal";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  // @ts-ignore
  const [services, setServices] = useState<ServiceType[]>([]);
  const { openModal } = useModal();

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) =>
        setServices(
          data.map((item: any) => mapKeys(item, (_, k) => camelCase(k)))
        )
      )
      .catch((error) => {
        console.error(error);
        setServices(dummy);
      });
  }, []);

  return (
    <S.Section>
      <Heading level="2">All Subscriptions</Heading>
      <S.ServiceContainer>
        {services.map((service) => (
          <Service
            {...service}
            key={JSON.stringify(service)}
            onClick={() => openModal(<EditServiceModal service={service} />)}
          />
        ))}
      </S.ServiceContainer>
    </S.Section>
  );
}
