import React from "react";

export const Avaliacoes = ({ children }: { children?: React.ReactNode }) => {
  return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{children}</ul>;
};
