import { useEffect, useState } from "react";
import { mapKeys, camelCase } from "lodash";
import { Service } from "../../types/Service";

export function useServices(): Service[] {
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

  return services;
}
