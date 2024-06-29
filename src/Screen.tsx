import React, { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return (
    <div className="h-screen flex flex-col w-full snap-center">{children}</div>
  );
}

export default Screen;
