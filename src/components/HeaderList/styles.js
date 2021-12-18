import React from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../Styles/colors";

export const styles = EStyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    height: "5.2rem",
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textColor,
    fontSize: "1.15rem",
    fontWeight: "bold",
    marginLeft: "0.8rem",
  },
  rightSide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "0.8rem",
    width: "4.4rem",
  },
});
