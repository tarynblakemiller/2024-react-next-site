"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

export interface RouteChangeListenerProps {
  children: ReactNode;
  sectionName: string;
}

export const RouteChangeListener: React.FC<RouteChangeListenerProps> = ({
  children,
}) => {
  const pathname = usePathname();
  // const [changes, setChanges] = useState(0);

  // useEffect(() => {
  //   console.log(`Route changed to: ${pathname}`);
  //   setChanges((prev) => prev + 1);
  // }, [pathname]);

  return (
    <div>
      <p>{pathname}</p>
      {children}
    </div>
  );
};
