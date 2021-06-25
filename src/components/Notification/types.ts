import { NotificationVariant } from "../../providers/NotificationProvider/types";

export interface NotificationProps {
  message: string;
  variant: NotificationVariant;
  dismissNotification?: (id: string) => void;
  id: string;
};
