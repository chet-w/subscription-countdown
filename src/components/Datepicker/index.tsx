import { ReactElement, useState } from "react";
import DateInput from "react-datepicker";
import slugify from "slugify";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "../Label";
import * as S from "./styles";
import { DatepickerProps } from "./types";

export function Datepicker(props: DatepickerProps): ReactElement {
  const [selectedDate, setSelectedDate] = useState<Date | [Date, Date]>(
    new Date()
  );
  return (
    <S.DatepickerContainer>
      <Label isActive htmlFor={slugify(props.name)}>
        {props.label}
      </Label>
      <DateInput
        value={selectedDate.toString()}
        onChange={(date) => setSelectedDate(date!)}
      />
    </S.DatepickerContainer>
  );
}
