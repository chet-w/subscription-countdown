import { ReactElement, useState } from "react";
import DateInput, { DayValue } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import * as S from "./styles";
import { DatepickerProps } from "./types";

export function Datepicker(props: DatepickerProps): ReactElement {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  return (
    <S.DatepickerContainer>
      <DateInput
        value={selectedDay}
        onChange={(value) => setSelectedDay(value)}
        inputPlaceholder="Select a day"
        shouldHighlightWeekends
      />
    </S.DatepickerContainer>
  );
}
