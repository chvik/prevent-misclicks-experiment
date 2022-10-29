import { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode | ReactNode[];
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="border-2  border-solid border-blue-500 p-1 rounded hover:bg-slate-100 active:bg-slate-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
