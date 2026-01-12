import React from "react";

export const Button = ({
  title,
  className,
  onClick,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};
