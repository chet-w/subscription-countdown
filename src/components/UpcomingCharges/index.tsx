import { ReactElement } from "react";
import { Heading } from "../Heading";
import { UpcomingChargesProps } from "./types";
import * as S from "./styles";
import { Service } from "../Service";

export function UpcomingCharges(props: UpcomingChargesProps): ReactElement {
  return (
    <S.Section>
      <Heading level="2">Upcoming Charges</Heading>
      <Service
        name="Apple Music"
        image=""
        amount={20}
        occurrance="monthly"
        nextPaymentDue={new Date()}
      />
    </S.Section>
  );
}
