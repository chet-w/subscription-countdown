import {
  useState,
  createContext,
  ReactElement,
  useContext,
  useEffect
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
    setNotifications([
      ...notifications.filter((notification) => notification.id !== id)
    ]);
  };

  const success = (message: string, duration?: number) => {
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "success",
        duration: duration,
        id: uniqueId()
      }
    ]);
  };

  const info = (message: string, duration?: number) => {
    setNotifications([
      ...notifications,
      {
        message: message,
        variant: "info",
        duration: duration,
        id: uniqueId()
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
        id: uniqueId()
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
        id: uniqueId()
      }
    ]);
  };

  return (
    <NotificationContext.Provider value={{ success, info, warning, danger }}>
      {props.children}
      <NotificationContainer>
        <AnimatePresence>
          {notifications.length &&
            notifications.map((notification) => (
              <Notification
                {...notification}
                key={notification.id}
                dismissNotification={(id: string) => removeNotification(id)}
              />
            ))}
        </AnimatePresence>
      </NotificationContainer>
    </NotificationContext.Provider>
  );
}
