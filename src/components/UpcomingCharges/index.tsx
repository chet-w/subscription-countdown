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
  const [billingDate] = useState(
    new Date("Sun Jun 20 2021 15:15:52 GMT+1200 (New Zealand Standard Time)")
  );

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
          image="https://www.apple.com/v/apple-music/p/images/overview/icon_apple_music__v9epn6m1oj6u_large_2x.png"
          amount={9.99}
          occurrence="monthly"
          nextPaymentDue={
            "Sun Jun 20 2021 15:15:52 GMT+1200 (New Zealand Standard Time)"
          }
        />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">Time left to cancel</Heading>
          <Heading level="2">{timeLeft}</Heading>
        </div>
      </S.ContentWrapper>
    </S.Section>
  );
}
