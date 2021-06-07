import { ReactElement } from "react";
import { FormButtonsProps } from "./types";
import * as S from "./styles";
import { Button } from "../Button";
import { useModal } from "../../providers/ModalProvider";

export function FormButtons(props: FormButtonsProps): ReactElement {
  const { closeModal } = useModal();

  return (
    <S.FormButtons>
      <Button variant="tertiary" onClick={() => closeModal()} type="button">
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Save Service
      </Button>
    </S.FormButtons>
  );
}
