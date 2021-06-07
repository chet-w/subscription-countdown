import { createContext, ReactElement } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../Input";
import { Option } from "../Select/types";
import { EditServiceFormProps } from "./types";

const occurrence_OPTIONS: Option[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" }
];

export function EditServiceForm(props: EditServiceFormProps): ReactElement {
  return (
    <Formik
      initialValues={props.service}
      validationSchema={Yup.object({
        name: Yup.string().required("Service needs to have a name"),
        amount: Yup.number()
          .min(1, "Service amount needs to be at least $1.00")
          .required("Service needs to have an amount"),
        occurrence: Yup.string().required(
          "Service needs to have an occurrence selected"
        ),
        nextPaymentDue: Yup.date().required(
          "Service needs a due date for the next payment"
        )
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* // <Form onSubmit={formik.handleSubmit}> */}
      <Form>
        <Field label="Service name" name="name" component={Input} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
