import React, { ReactElement } from "react";
import { Container } from "../Container";
import { MainProps } from "./types";

export function Main(props: MainProps): ReactElement {
  return (
    <main>
      <Container>{props.children}</Container>
    </main>
  );
}
