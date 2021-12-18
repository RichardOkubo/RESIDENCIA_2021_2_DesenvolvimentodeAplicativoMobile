import React from "react";
import { View, Text } from "react-native";

import { useOrientation } from "../../../../hooks/useOrientation";
import { styles } from "./styles";

export default function MovieTitle({ children }) {
  const orientation = useOrientation();

  return (
    <Text style={orientation.isPortrait ? styles.portrait : styles.landscapet}>
      {children}
    </Text>
  );
}
