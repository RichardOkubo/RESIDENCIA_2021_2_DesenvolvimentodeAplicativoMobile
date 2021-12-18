import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Rating from "./Rating";
import Action from "./Action";
import { useOrientation } from "../../../hooks/useOrientation";
import { colors } from "../../../Styles/colors";
import { styles } from "./styles";

export default function SecundaryInfo({ item }) {
  const orientation = useOrientation();

  return (
    <View
      style={
        orientation.isPortrait
          ? styles.portrait
          : styles.landscapet
      }
    >
      <Rating rating={item?.rating} />
      <View
        style={
          orientation.isPortrait
            ? styles.actionsPortrait
            : styles.actionsLandscapet
        }
      >
        <Action name={"Receber aviso"}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color={colors.default}
            style={{ marginBottom: 5 }}
          />
        </Action>

        <Action name={"Saiba mais"}>
          <MaterialIcons
            name="info-outline"
            size={24}
            color={colors.default}
            style={{ marginBottom: 5 }}
          />
        </Action>
      </View>
    </View>
  );
}
