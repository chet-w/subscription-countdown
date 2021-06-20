import { createContext, ReactElement, useContext, useEffect } from "react";
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

  useEffect(() => {
    // if (notifiction) {
    //   setTimeout(() => {
    //     setNotification(null);
    //   }, notifiction.duration || 3000);
    // }
  }, [notifiction]);

  const success = (message: string, duration?: number) => {
    setNotification({
      message: message,
      variant: "success",
      duration: duration
    });
  };

  const info = (message: string, duration?: number) => {
    setNotification({ message: message, variant: "info", duration: duration });
  };

  const warning = (message: string, duration?: number) => {
    setNotification({
      message: message,
      variant: "warning",
      duration: duration
    });
  };
  const danger = (message: string, duration?: number) => {
    setNotification({
      message: message,
      variant: "danger",
      duration: duration
    });
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
