import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundDemo({children}: {children: React.ReactNode}) {
  return (
    <div className="relative flex  bg-gradient-to-br from-orange-50 to-orange-50  w-full items-center justify-center  ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      {children}
    </div>
  );
}
