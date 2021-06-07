import { createContext, ReactElement } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, FormProvider } from "../Form";
import { Input } from "../Input";
import { Option } from "../Select/types";
import { EditServiceFormProps } from "./types";
import { format } from "date-fns";

const occurrence_OPTIONS: Option[] = [
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
    <FormProvider
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
      {(formik: any) => (
        <Form onSubmit={formik.handleSubmit}>
          <Input
            label="Service name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {/* <Select options={occurrence_OPTIONS} label="occurrence" /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </FormProvider>
  );
}
