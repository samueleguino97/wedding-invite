const leavesPosition = {
  topleft: "-top-24 -left-32",
  topright: "-top-24 -right-32",
  bottomleft: "-bottom-24 -left-32",
  bottomright: "-bottom-24 -right-32",
  centerleft: "top-1/2   -left-32",
  centerright: "top-1/2   -right-32",
};

type LeavesProps = {
  position: keyof typeof leavesPosition;
  rotation: keyof typeof leavesPosition;
  leaveUrl: string;
};
export function Leaves({ position, leaveUrl }: LeavesProps) {
  return (
    <div
    style={{zIndex:10}}
      className={

        "absolute transition-all w-[70%] max-w-[300px] " +
        leavesPosition[position] +
        " " +
        leavesPosition[position]
      }
    >
      <img
        className="object-contain w-full aspect-square"
        src={leaveUrl}
        alt="leaves"
      />
    </div>
  );
}
