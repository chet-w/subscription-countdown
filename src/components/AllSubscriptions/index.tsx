import { ReactElement, useState } from "react";
import { AllSubscriptionProps } from "./types";
import * as S from "./styles";
import { Heading } from "../Heading";
import { Service } from "../Service";
import { Service as ServiceType } from "../../types/Service";
import { data } from "../../dummy.js";

export function AllSubscriptions(props: AllSubscriptionProps): ReactElement {
  // @ts-ignore
  const [services] = useState<ServiceType[]>(data);

  return (
    <S.Section>
      <Heading level="2">All Subscriptions</Heading>
      <S.ServiceContainer>
        {services.map((service) => (
          <Service {...service} />
        ))}
      </S.ServiceContainer>
    </S.Section>
  );
}
