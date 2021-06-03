import { ReactElement } from "react";
import { Heading } from "../Heading";
import { Badge } from "../Badge";
import { ServiceProps } from "./types";
import * as S from "./styles";

export function Service(props: ServiceProps): ReactElement {
  console.log(props);
  return (
    <S.Service>
      <S.SpacedBetweenRow>
        <Heading level="3">{props.name}</Heading>
        <Badge variant="success" content={props.occurrance} />
      </S.SpacedBetweenRow>
      <S.SpacedBetweenRow>
        <S.Image src={props.image} />
        <div style={{ textAlign: "right" }}>
          <Heading level="3">{`$${props.amount}`}</Heading>
          <b>Next payment due</b>
          <div>{props.nextPaymentDue}</div>
        </div>
      </S.SpacedBetweenRow>
    </S.Service>
  );
}
