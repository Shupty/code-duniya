import React from "react";

const container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1180px] mx-auto px-2.5 lg:px-0">{children}</div>;
};

export default container;
