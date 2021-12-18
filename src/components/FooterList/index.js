import React from "react";
import { View, ActivityIndicator } from "react-native";

import { colors } from "../../Styles/colors";

export default function FooterList({ load }) {
  if (!load) return null;

  return (
    <View style={{ marginBottom: 16 }}>
      <ActivityIndicator size={25} color={colors.default} />
    </View>
  );
}
