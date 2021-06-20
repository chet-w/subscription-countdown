import { createContext, ReactElement, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Notification } from "../../components/Notification";
import {
  NotificationContextValues,
  NotificationProviderProps,
  Notification as NotificationType
} from "./types";
import { useState } from "react";

const NotificationContext =
  createContext<NotificationContextValues | null>(null);

export function useNotification(): NotificationContextValues {
  return useContext(NotificationContext)!;
}

export function NotificationProvider(
  props: NotificationProviderProps
): ReactElement {
  const [notifiction, setNotification] =
    useState<NotificationType | null>(null);

  const success = (message: string) => {
    setNotification({ message: message, variant: "success" });
  };

  const info = (message: string) => {
    setNotification({ message: message, variant: "info" });
  };

  const warning = (message: string) => {
    setNotification({ message: message, variant: "warning" });
  };
  const danger = (message: string) => {
    setNotification({ message: message, variant: "danger" });
  };

  return (
    <NotificationContext.Provider value={{ success, info, warning, danger }}>
      {props.children}
      <AnimatePresence>
        {notifiction && <Notification {...notifiction} />}
      </AnimatePresence>
    </NotificationContext.Provider>
  );
}
