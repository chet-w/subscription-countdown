import { ReactElement } from "react";

export interface NotificationContextValues {
  success: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
  danger: (message: string) => void;
};

export interface NotificationProviderProps {
  children: ReactElement | ReactElement[];
}

export interface Notification {
  message: string;
  variant: NotificationVariant;
}

export type NotificationVariant = "success" | "info" | "warning" | "danger";