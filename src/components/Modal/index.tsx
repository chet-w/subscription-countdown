import React, { ReactElement, useRef } from "react";
import { ModalProps } from "./types";
import * as S from "./styles";
import { variants, transition } from "./animations";
import { useFocusTrap } from "../../hooks/useFocusTrap";

export function Modal(props: ModalProps): ReactElement {
  const ModalRef = useRef<HTMLElement>(null!);
  useFocusTrap(ModalRef);

  return (
    <S.Modal
      id={props.id}
      variants={variants}
      transition={transition}
      initial="hidden"
      animate="active"
      exit="hidden"
      ref={ModalRef}
      role="dialog"
      aria-labelledby={`${props.id}_header`}
      aria-modal="true"
    >
      <S.Header>
        <h4 id={`${props.id}_header`} tabIndex={0}>
          {props.title}
        </h4>
      </S.Header>
      <S.Body>{props.children}</S.Body>
    </S.Modal>
  );
}
