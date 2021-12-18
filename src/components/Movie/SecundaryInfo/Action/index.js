import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useOrientation } from "../../../../hooks/useOrientation";
import { colors } from "../../../../Styles/colors";
import { styles } from "./styles";

export default function Action({ children, name }) {
  const orientation = useOrientation();

  return (
    <TouchableOpacity
      style={
        orientation.isPortrait ? styles.actionPortrait : styles.actionLandscapet
      }
    >
      {children}
      <Text
        style={
          orientation.isPortrait
            ? styles.textIconPortrait
            : styles.textIconLandscapet
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
