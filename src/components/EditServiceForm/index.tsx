import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<EditServiceFormInputs>();

  const onSubmit: SubmitHandler<EditServiceFormInputs> = (data) =>
    console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name", { required: true })}
        label="Service name"
        valid={!Boolean(errors.name)}
        error="Service name can't be blank"
      />
      <Select
        options={OCCURRANCE_OPTIONS}
        label="Occurrance"
        {...register("occurrance", { required: true })}
      />
      <input type="submit" value="submit" />
    </Form>
  );
}
