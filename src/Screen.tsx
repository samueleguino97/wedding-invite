import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return (
    <div className="h-dvh flex flex-col w-full snap-center">{children}</div>
  );
}

export default Screen;
