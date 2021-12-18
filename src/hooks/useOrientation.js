import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useOrientation = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get("screen"));

  useEffect(() => {
    function onChange(result) {
      setScreenInfo(result.screen);
    }

    Dimensions.addEventListener("change", onChange);

    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  return {
    ...screenInfo,
    isPortrait: screenInfo.height > screenInfo.width
  }
};
