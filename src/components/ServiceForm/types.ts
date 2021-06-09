import { Service } from "../../types/Service";

export interface ServiceFormProps {
  service?: Service;
  formButtonLabels: string[]
}

export interface ServiceFormInputs extends Service {
}