import {
  useState,
  createContext,
  ReactElement,
  useContext,
  useEffect
} from "react";
import { AnimatePresence } from "framer-motion";
import { Notification } from "../../components/Notification";
import { NotificationContainer } from "../../components/NotificationContainer";
import {
  NotificationContextValues,
  NotificationProviderProps,
  Notification as NotificationType
} from "./types";

const NotificationContext =
  createContext<NotificationContextValues | null>(null);

export function useNotification(): NotificationContextValues {
  return useContext(NotificationContext)!;
}

export function NotificationProvider(
  props: NotificationProviderProps
): ReactElement {
  const [notifictions, setNotifications] = useState<NotificationType[]>([]);

  useEffect(() => {
    // if (notifiction) {
    //   setTimeout(() => {
    //     setNotification(null);
    //   }, notifiction.duration || 3000);
    // }
  }, [notifictions.length]);

  const success = (message: string, duration?: number) => {
    setNotifications([
      ...notifictions,
      {
        message: message,
        variant: "success",
        duration: duration
      }
    ]);
  };

  const info = (message: string, duration?: number) => {
    setNotifications([
      ...notifictions,
      {
        message: message,
        variant: "info",
        duration: duration
      }
    ]);
  };

  const warning = (message: string, duration?: number) => {
    setNotifications([
      ...notifictions,
      {
        message: message,
        variant: "warning",
        duration: duration
      }
    ]);
  };
  const danger = (message: string, duration?: number) => {
    setNotifications([
      ...notifictions,
      {
        message: message,
        variant: "danger",
        duration: duration
      }
    ]);
  };

  return (
    <NotificationContext.Provider value={{ success, info, warning, danger }}>
      {props.children}
      <NotificationContainer>
        <AnimatePresence>
          {notifictions.length &&
            notifictions.map((notification) => (
              <Notification {...notification} />
            ))}
        </AnimatePresence>
      </NotificationContainer>
    </NotificationContext.Provider>
  );
}
