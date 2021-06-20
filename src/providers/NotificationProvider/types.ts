import { ReactElement } from "react";
import { NotificationProps } from "../../components/Notification/types";

export interface NotificationContextValues {
  success: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  danger: (message: string, duration?: number) => void;
};

export interface NotificationProviderProps {
  children: ReactElement | ReactElement[];
}

export interface Notification extends NotificationProps {
  duration?: number;
}

export type NotificationVariant = "success" | "info" | "warning" | "danger";