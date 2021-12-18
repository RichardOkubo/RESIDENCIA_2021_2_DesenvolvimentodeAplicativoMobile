import React from "react";
import { Text } from "react-native";

import { useOrientation } from "../../../../hooks/useOrientation";
import { styles } from "./styles";

export default function MovieDescription({ children }) {
  const orientation = useOrientation();

  return (
    <Text
      style={orientation.isPortrait ? styles.portrait : styles.landscapet}
      numberOfLines={6}
    >
      {children}
    </Text>
  );
}
