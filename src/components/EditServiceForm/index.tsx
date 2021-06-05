import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { EditServiceFormProps } from "./types";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

export function EditServiceForm(props: EditServiceFormProps): ReactElement {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName", { required: true })} />
      {/* {errors.firstName && "First name is required"} */}
      <Input {...register("lastName", { required: true })} />
      {/* {errors.lastName && "Last name is required"} */}
    </Form>
  );
}
