import { useEffect, useState } from "react";
import { mapKeys, camelCase, snakeCase } from "lodash";
import { Service } from "../../types/Service";
import { UseServiceType } from "./types";

export function useService(id: number): UseServiceType {
  const [service, setService] = useState<Service | null>(null);

  const updateService = async (serviceData: Service) => {
    const { id, ...params } = serviceData;
    const { nextPaymentDue } = params;
    const formattedNextPaymentDue = new Date(nextPaymentDue).toISOString();
    const formattedParams = mapKeys(
      { ...params, nextPaymentDue: formattedNextPaymentDue },
      (_, k) => snakeCase(k)
    );

    const res = await fetch(`http://localhost:3000/services/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        service: {
          ...formattedParams
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setService(mapKeys(data, (_, k) => camelCase(k)) as Service)
      )
      .catch((error) => console.error(error));
  }, [id]);

  return { service, updateService };
}
