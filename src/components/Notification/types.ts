import { NotificationVariant } from "../../providers/NotificationProvider/types";

export interface NotificationProps {
  message: string;
  variant: NotificationVariant;
  id: string;
};

export interface NotificationIconProps {
  variant: NotificationVariant;
}
