import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "px-5 py-2 rounded-xl font-semibold shadow-sm hover:opacity-90 transition duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
