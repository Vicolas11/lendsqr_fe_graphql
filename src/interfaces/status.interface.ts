export interface UserStatusProps {
  status: string | "Active" | "Inactive" | "Blacklisted" | "Pending";
}

export interface IInputValue {
  [key: string]: string;
}
