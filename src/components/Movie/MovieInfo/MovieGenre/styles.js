import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../../Styles/colors";

export const styles = EStyleSheet.create({
  portrait: {
    flexDirection: "row",
    color: colors.textColor,
    marginHorizontal: ".5rem",
    marginTop: ".3rem",
    marginBottom: "1.5rem",
  },
  landscapet: {
    flexDirection: "row",
    color: colors.textColor,
    marginHorizontal: ".5rem",
    marginTop: "auto",
  },
});
