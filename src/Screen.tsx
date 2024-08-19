import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return ( 
    <div className="h-dvh max-w-[500px] bg-orange-100 mx-auto flex flex-col w-full snap-start relative">
      {children}
    </div>
  );
}

export default Screen;
