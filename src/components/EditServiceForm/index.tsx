import { ReactElement } from "react";
import { Form } from "../Form";
import { Input } from "../Input";
import { Select } from "../Select";
import { Option } from "../Select/types";
import { EditServiceFormInputs, EditServiceFormProps } from "./types";

const OCCURRANCE_OPTIONS: Option[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" }
];

export function EditServiceForm(props: EditServiceFormProps): ReactElement {
  return (
    <Form>
      <Input label="Service name" />
      <Select options={OCCURRANCE_OPTIONS} label="Occurrance" />
      <input type="submit" value="submit" />
    </Form>
  );
}
