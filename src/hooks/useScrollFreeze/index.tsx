/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useScrollFreeze(dependencies: any[] = []) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [...dependencies]);
}
