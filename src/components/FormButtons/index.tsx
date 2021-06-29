import React, { ReactElement } from "react";
import { FormButtonsProps } from "./types";
import * as S from "./styles";
import { Button } from "../Button";
import { useModal } from "../../providers/ModalProvider";

export function FormButtons(props: FormButtonsProps): ReactElement {
  const { closeModal } = useModal();
  const [first, second] = props.labels;

  return (
    <S.FormButtons>
      <Button variant="tertiary" onClick={() => closeModal()} type="button">
        {first}
      </Button>
      <Button variant="primary" type="submit">
        {second}
      </Button>
    </S.FormButtons>
  );
}
