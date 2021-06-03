import { ReactElement, useState } from "react";
import { Heading } from "../Heading";
import { UpcomingChargesProps } from "./types";
import * as S from "./styles";
import { Service } from "../Service";
import { useInterval } from "../../hooks/useInterval";
import {
  addDays,
  addHours,
  addMinutes,
  differenceInDays,
  differenceInHours
} from "date-fns";
import { differenceInMinutes, differenceInSeconds } from "date-fns/esm";

export function UpcomingCharges(props: UpcomingChargesProps): ReactElement {
  const [timeLeft, setTimeLeft] = useState("");
  const [billingDate] = useState(new Date(2021, 6, 9));

  useInterval(() => {
    const today = new Date();
    const daysLeft = differenceInDays(billingDate, today);
    const todayPlusDays = addDays(today, daysLeft);
    const hoursLeft = differenceInHours(billingDate, todayPlusDays);
    const todayPlusHours = addHours(todayPlusDays, hoursLeft);
    const minsLeft = differenceInMinutes(billingDate, todayPlusHours);
    const todayPlusMins = addMinutes(todayPlusHours, minsLeft);
    const secondsLeft = differenceInSeconds(billingDate, todayPlusMins);
    setTimeLeft(`${daysLeft}:${hoursLeft}:${minsLeft}:${secondsLeft}`);
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
          nextPaymentDue={billingDate}
        />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">Time left to cancel</Heading>
          <Heading level="2">{timeLeft}</Heading>
        </div>
      </S.ContentWrapper>
    </S.Section>
  );
}
