import { Column } from "../types";

export const viewDataColumns: readonly Column[] = [
  { id: "email", label: "Email", minWidth: 170 },
  { id: "isSeller", label: "Are you a Seller?", minWidth: 100, format: (value: boolean) => (value ? "Yes" : "No"), },
  { id: "state", label: "State", minWidth: 170 },
  {
    id: "createdAt", label: "CreatedAt", minWidth: 170,
  }
];