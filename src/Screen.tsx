import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

function Screen({ children }: ScreenProps) {
  return ( 
    <div className="flex-nowrap h-dvh max-w-[800px] bg-orange-100 mx-auto flex flex-col w-full snap-start relative">
      {children}
    </div>
  );
}

export default Screen;
