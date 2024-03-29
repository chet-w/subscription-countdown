import React, { ReactElement } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../Input";
import { NumberInput } from "../NumberInput";
import { Option } from "../Select/types";
import { ServiceFormProps } from "./types";
import { Select } from "../Select";
import { Datepicker } from "../Datepicker";
import { FormButtons } from "../FormButtons";
import { useService } from "../../hooks/useService";
import { useModal } from "../../providers/ModalProvider";
import { Service } from "../../types/Service";
import { useNotification } from "../../providers/NotificationProvider";

const OCCURRENCE_OPTIONS: Option[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" }
];

const INITIAL_SERVICE_VALUES: Service = {
  name: "",
  amount: 1,
  image: "",
  nextPaymentDue: "",
  occurrence: "weekly"
};

export function ServiceForm(props: ServiceFormProps): ReactElement {
  const { updateService, createService } = useService(props?.service?.id);
  const { closeModal } = useModal();
  const notification = useNotification();

  return (
    <Formik
      initialValues={props.service || INITIAL_SERVICE_VALUES}
      validationSchema={Yup.object({
        name: Yup.string().required("Service needs to have a name"),
        amount: Yup.number()
          .min(1, "Service amount needs to be at least $1.00")
          .required("Service needs to have an amount"),
        occurrence: Yup.string().required(
          "Service needs to have an occurrence selected"
        ),
        nextPaymentDue: Yup.date()
          .required("Service needs a due date for the next payment")
          .min(new Date(), "Service due date can't be in the past")
      })}
      onSubmit={async values => {
        console.log(values);
        if (props.service) {
          await updateService(values);
          notification.success(`Updated ${values.name}`);
        } else {
          await createService(values);
          notification.success(`Added ${values.name}`);
        }
        closeModal();
      }}
    >
      <Form>
        <Input label="Service name" name="name" />
        <NumberInput label="Payment amount" name="amount" />
        <Select
          label="Occurrence"
          name="occurrence"
          options={OCCURRENCE_OPTIONS}
        />
        <Datepicker label="Next payment due" name="nextPaymentDue" />
        <FormButtons labels={props.formButtonLabels} />
      </Form>
    </Formik>
  );
}
