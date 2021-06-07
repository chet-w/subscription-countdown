import { Service } from "../../types/Service";

export interface UseServiceType {
  service: Service | null;
  updateService: (data: Service) => void;
}