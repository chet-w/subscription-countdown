export interface ServiceProps {
  name: string;
  image: string;
  amount: number;
  occurrance: "weekly" | "fortnightly" | "monthly" | "yearly";
  nextPaymentDue: Date;
}