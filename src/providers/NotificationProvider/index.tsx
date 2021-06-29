import React, {
  useState,
  createContext,
  ReactElement,
  useContext
} from "react";
import uniqueId from "lodash/uniqueId";
import { AnimatePresence } from "framer-motion";
import { Notification } from "../../components/Notification";
import { NotificationContainer } from "../../components/NotificationContainer";
import {
  NotificationContextValues,
  NotificationProviderProps,
  Notification as NotificationType
} from "./types";

const NotificationContext = createContext<NotificationContextValues | null>(
  null
);

export function useNotification(): NotificationContextValues {
  return useContext(NotificationContext)!;
}

export function NotificationProvider(
  props: NotificationProviderProps
): ReactElement {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const removeNotification = (id: string) => {
    notifications.splice(0, 1);
    setNotifications([...notifications]);
  };

  const success = (message: string, duration?: number) => {
    const id = uniqueId("notification_");
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "success",
        duration: duration,
        id
      }
    ]);
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const info = (message: string, duration?: number) => {
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "info",
        duration: duration,
        id: uniqueId("notification_")
      }
    ]);
  };

  const warning = (message: string, duration?: number) => {
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "warning",
        duration: duration,
        id: uniqueId("notification_")
      }
    ]);
  };
  const danger = (message: string, duration?: number) => {
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "danger",
        duration: duration,
        id: uniqueId("notification_")
      }
    ]);
  };

  return (
    <NotificationContext.Provider value={{ success, info, warning, danger }}>
      {props.children}
      <NotificationContainer>
        <AnimatePresence initial={false}>
          {notifications.length &&
            notifications.map(notification => (
              <Notification {...notification} key={notification.id} />
            ))}
        </AnimatePresence>
      </NotificationContainer>
    </NotificationContext.Provider>
  );
}
