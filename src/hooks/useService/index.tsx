import { useEffect, useState } from "react";
import { mapKeys, camelCase } from "lodash";
import { Service } from "../../types/Service";

export function useService(id: number): Service | null {
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setService(mapKeys(data, (_, k) => camelCase(k)) as Service)
      )
      .catch((error) => console.error(error));
  }, [id]);

  return service;
}
