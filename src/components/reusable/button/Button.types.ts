export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "light" | "dark";
  children: React.ReactNode;
}
