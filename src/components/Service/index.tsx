import React, { ReactElement } from "react";
import { format } from "date-fns";
import { Heading } from "../Heading";
import { Badge } from "../Badge";
import { ServiceProps } from "./types";
import * as S from "./styles";

const badgeVariant = (
  occurrence: "weekly" | "monthly" | "yearly"
): "success" | "warning" | "danger" => {
  switch (occurrence) {
    case "weekly":
      return "success";
    case "monthly":
      return "warning";
    case "yearly":
      return "danger";
  }
};

export function Service(props: ServiceProps): ReactElement {
  const nextPaymentDate = format(
    new Date(props.nextPaymentDue),
    "iiii do MMMM yyyy"
  );

  return (
    <S.Service onClick={props.onClick}>
      <S.SpacedBetweenRow>
        <Heading level="3">{props.name}</Heading>
        <Badge
          variant={badgeVariant(props.occurrence)}
          content={props.occurrence}
        />
      </S.SpacedBetweenRow>
      <S.SpacedBetweenRow>
        <S.Image src={props.image} />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">{`$${Number(props.amount).toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })}`}</Heading>
          <b>Next payment due</b>
          <div>{nextPaymentDate}</div>
        </div>
      </S.SpacedBetweenRow>
    </S.Service>
  );
}
