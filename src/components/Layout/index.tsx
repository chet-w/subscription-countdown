import React, { Fragment, ReactElement } from "react";
import { Header } from "../Header";
import { Main } from "../Main";
import { LayoutProps } from "./types";

export function Layout(props: LayoutProps): ReactElement {
  return (
    <Fragment>
      <Header />
      <Main>{props.children}</Main>
    </Fragment>
  );
}
