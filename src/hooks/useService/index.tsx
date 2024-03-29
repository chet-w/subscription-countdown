import React, { useEffect, useState } from "react";
import { mapKeys, camelCase, snakeCase } from "lodash";
import { Service } from "../../types/Service";
import { UseServiceType } from "./types";
import { useServices } from "../../providers/ServicesProvider";

export function useService(id?: number): UseServiceType {
  const [service, setService] = useState<Service | null>(null);

  const { services, setServices } = useServices();

  const updateServiceInContext = (serviceData: Service) => {
    const withUpdateValue = services.map(srv => {
      if (srv.id === serviceData.id) {
        return serviceData;
      }
      return srv;
    });

    setServices(withUpdateValue);
  };

  const addServiceToContext = (serviceData: Service) => {
    setServices([...services, serviceData]);
  };

  const updateService = async (serviceData: Service) => {
    const { id, ...params } = serviceData;
    const { nextPaymentDue } = params;
    const formattedNextPaymentDue = new Date(nextPaymentDue).toISOString();
    const formattedParams = mapKeys(
      { ...params, nextPaymentDue: formattedNextPaymentDue },
      (_, k) => snakeCase(k)
    );

    try {
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
      updateServiceInContext(serviceData);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const createService = async (serviceData: Service) => {
    const { id, ...params } = serviceData;
    const { nextPaymentDue } = params;
    const formattedNextPaymentDue = new Date(nextPaymentDue).toISOString();
    const formattedParams = mapKeys(
      { ...params, nextPaymentDue: formattedNextPaymentDue },
      (_, k) => snakeCase(k)
    );

    try {
      const res = await fetch("http://localhost:3000/services/", {
        method: "POST",
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
      addServiceToContext({ ...serviceData, id: data.id });

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/services/${id}`)
        .then(res => res.json())
        .then(data =>
          setService(mapKeys(data, (_, k) => camelCase(k)) as Service)
        )
        .catch(error => console.error(error));
    }
  }, [id]);

  return { service, updateService, createService };
}
