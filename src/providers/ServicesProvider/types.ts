import { ReactElement } from "react";
import { Service } from "../../types/Service";

export interface ServicesProviderProps {
  children: ReactElement;
}

export interface ServicesContextValues {
  services: Service[];
}