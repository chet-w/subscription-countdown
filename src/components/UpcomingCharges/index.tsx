import { ReactElement, useEffect, useState } from "react";
import { Heading } from "../Heading";
import { UpcomingChargesProps } from "./types";
import * as S from "./styles";
import { Service } from "../Service";
import { useInterval } from "../../hooks/useInterval";

export function UpcomingCharges(props: UpcomingChargesProps): ReactElement {
  const [timeLeft, setTimeLeft] = useState(new Date().getSeconds());

  useInterval(() => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  return (
    <S.Section>
      <Heading level="2">Upcoming Charges</Heading>
      <S.ContentWrapper>
        <Service
          name="Apple Music"
          image=""
          amount={20}
          occurrance="monthly"
          nextPaymentDue={new Date()}
        />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">Time left to cancel</Heading>
          <Heading level="2">{timeLeft}</Heading>
        </div>
      </S.ContentWrapper>
    </S.Section>
  );
}
