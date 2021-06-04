import { ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && "First name is required"}
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <input type="submit" />
    </form>
  );
}
