"use client";

import { useCallback, useState } from "react";

export const useModal = (defaultState: boolean = false) => {
  const [isVisible, setIsVisible] = useState<boolean>(defaultState);

  // set true
  const setIsVisibleHandler = useCallback(() => {
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  // set false
  const setIsNotVisibleHandler = useCallback(() => {
    if (isVisible) {
      setIsVisible(false);
    }
  }, [isVisible]);

  // toggle
  const toggleIsVisible = useCallback(() => {
    setIsVisible((currState) => !currState);
  }, []);

  return {
    isVisible,
    setIsVisibleHandler,
    setIsNotVisibleHandler,
    toggleIsVisible,
  };
};
