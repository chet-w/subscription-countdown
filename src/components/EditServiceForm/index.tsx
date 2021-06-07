import { createContext, ReactElement } from "react";
import { useFormik } from "formik";
import { Form } from "../Form";
import { Input } from "../Input";
import { Option } from "../Select/types";
import { EditServiceFormProps } from "./types";

const OCCURRANCE_OPTIONS: Option[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" }
];

export function EditServiceForm(props: EditServiceFormProps): ReactElement {
  const formik = useFormik({
    initialValues: {
      ...props.service
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Form
      initialValues={...props.service}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        amount: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Input
        label="Service name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {/* <Select options={OCCURRANCE_OPTIONS} label="Occurrance" /> */}
      <input type="submit" value="submit" />
    </Form>
  );
}
