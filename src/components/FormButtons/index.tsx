import { ReactElement } from "react";
import { useFormikContext } from "formik";
import { FormButtonsProps } from "./types";
import * as S from "./styles";
import { Button } from "../Button";
import { useModal } from "../../providers/ModalProvider";

export function FormButtons(props: FormButtonsProps): ReactElement {
  const { closeModal } = useModal();
  const { submitForm } = useFormikContext();

  return (
    <S.FormButtons>
      <Button variant="tertiary" onClick={() => closeModal()}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => submitForm()}>
        Save Service
      </Button>
    </S.FormButtons>
  );
}
