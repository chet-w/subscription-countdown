export interface Service {
  name: string;
  image: string;
  amount: number;
  occurrence: "weekly" | "monthly" | "yearly";
  nextPaymentDue: string;
}