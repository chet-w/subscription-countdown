export interface Service {
  id?: number;
  name: string;
  image: string;
  amount: number;
  occurrence: "weekly" | "monthly" | "yearly";
  nextPaymentDue: string;
}