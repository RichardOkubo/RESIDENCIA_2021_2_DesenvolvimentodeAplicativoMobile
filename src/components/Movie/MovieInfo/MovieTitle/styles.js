import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../../Styles/colors";

export const styles = EStyleSheet.create({
  portrait: {
    marginTop: ".6rem",
    marginHorizontal: ".5rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: colors.textColor,
  },
  landscapet: {
    marginHorizontal: ".5rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: colors.textColor,
  },
});
