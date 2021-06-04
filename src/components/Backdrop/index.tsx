import React, { ReactElement, useRef } from "react";
import { BackdropProps } from "./types";
import * as S from "./styles";
import { useScrollFreeze } from "../../hooks/useScrollFreeze";
import { useModal } from "../../providers/ModalProvider";
import { variants } from "./animations";

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
    <S.Backdrop
      ref={BackdropRef}
      onClick={(event) => handleClick(event)}
      variants={variants}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      {props.children}
    </S.Backdrop>
  );
}
