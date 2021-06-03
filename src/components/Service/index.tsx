import { ReactElement } from "react";
import { format } from "date-fns";
import { Heading } from "../Heading";
import { Badge } from "../Badge";
import { ServiceProps } from "./types";
import * as S from "./styles";

const badgeVariant = (
  occurrance: "weekly" | "monthly" | "yearly"
): "success" | "warning" | "danger" => {
  switch (occurrance) {
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
    <S.Service>
      <S.SpacedBetweenRow>
        <Heading level="3">{props.name}</Heading>
        <Badge
          variant={badgeVariant(props.occurrance)}
          content={props.occurrance}
        />
      </S.SpacedBetweenRow>
      <S.SpacedBetweenRow>
        <S.Image src={props.image} />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">{`$${props.amount}`}</Heading>
          <b>Next payment due</b>
          <div>{nextPaymentDate}</div>
        </div>
      </S.SpacedBetweenRow>
    </S.Service>
  );
}
