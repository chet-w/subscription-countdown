import { ReactElement } from "react";
import { ModalProps } from "./types";
import * as S from "./styles";
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
