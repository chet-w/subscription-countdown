export interface Service {
  name: string;
  image: string;
  amount: number;
  occurrance: "weekly" | "monthly" | "yearly";
  nextPaymentDue: string;
}