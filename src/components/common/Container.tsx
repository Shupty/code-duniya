import React from "react";

const container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1180px] mx-auto">{children}</div>;
};

export default container;
