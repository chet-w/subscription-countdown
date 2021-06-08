import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from "react";
import { mapKeys, camelCase } from "lodash";
import { Service } from "../../types/Service";
import { ServicesContextValues, ServicesProviderProps } from "./types";

const ServicesContext = createContext<ServicesContextValues | null>(null);

export function useServices(): ServicesContextValues {
  return useContext(ServicesContext)!;
}

export function ServicesProvider(props: ServicesProviderProps): ReactElement {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) =>
        setServices(
          data.map((item: any) => mapKeys(item, (_, k) => camelCase(k)))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {props.children}
    </ServicesContext.Provider>
  );
}
