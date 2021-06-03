import React, { ReactElement } from "react";
import { ModalProps } from "./types";
import * as S from "./styles";
import { useModal } from "../../providers/ModalProvider";

export function Modal(props: ModalProps): ReactElement {
  return (
    <S.Modal id={props.id}>
      <h4>{props.title}</h4>
    </S.Modal>
  );
}

export function Backdrop(): ReactElement {
  const { closeModal } = useModal();

  return <S.Backdrop onClick={() => closeModal()} />;
}
