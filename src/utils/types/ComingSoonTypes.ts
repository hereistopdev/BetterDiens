export interface RequestNotifyPropsType {
  email: string;
  isSeller: boolean;
  state: string;
}

export interface CustomSelectPropsType {
  placeholder: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  optionData: string[];
  customStyle?: string;
}

export interface CustomTableDataType {
  uuid: string;
  email: string;
  isSeller: boolean;
  state: string;
  createdAt: string;
}

export interface CustomTablePropsType {
  tableData: CustomTableDataType[];
  loadingStatus?: boolean;
}

export interface Column {
  id: "uuid" | "email" | "isSeller" | "state" | "createdAt";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: boolean) => string;
}

export interface CustomAlertProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  content: string;
  severity: "success" | "info" | "warning" | "error";
}
