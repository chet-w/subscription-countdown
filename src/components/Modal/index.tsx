import React, { ReactElement, useRef } from "react";
import { BackdropProps, ModalProps } from "./types";
import * as S from "./styles";
import { useModal } from "../../providers/ModalProvider";
import { useScrollFreeze } from "../../hooks/useScrollFreeze";
import { variants, transition } from "./animations";

export function Modal(props: ModalProps): ReactElement {
  return (
    <S.Modal
      id={props.id}
      variants={variants}
      transition={transition}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      <S.Header>
        <h4>{props.title}</h4>
      </S.Header>
      <S.Body>{props.children}</S.Body>
      <S.Footer>
        <button>Cancel</button>
        <button>Update Service</button>
      </S.Footer>
    </S.Modal>
  );
}

export function Backdrop(props: BackdropProps): ReactElement {
  const { closeModal } = useModal();
  const BackdropRef = useRef<HTMLDivElement>(null);

  useScrollFreeze();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target === BackdropRef.current) {
      closeModal();
    }
  }

  return (
    <S.Backdrop ref={BackdropRef} onClick={(event) => handleClick(event)}>
      {props.children}
    </S.Backdrop>
  );
}
