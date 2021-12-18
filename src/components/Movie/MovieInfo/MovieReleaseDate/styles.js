import React from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../../Styles/colors";

export const styles = EStyleSheet.create({
  portrait: {
    marginTop: "1.7rem",
    marginHorizontal: ".5rem",
    fontSize: ".9rem",
    color: colors.textColor,
  },
  landscapet: {
    marginTop: ".7rem",
    marginHorizontal: ".5rem",
    fontSize: ".9rem",
    color: colors.textColor,
  },
});
