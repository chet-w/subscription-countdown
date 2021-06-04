import React from "react";
import { Service } from "../../types/Service";

export interface ServiceProps extends Service {
  onClick?: (event: React.MouseEvent) => void
}