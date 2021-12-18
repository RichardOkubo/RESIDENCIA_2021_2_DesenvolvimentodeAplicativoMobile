import EStyleSheet from "react-native-extended-stylesheet";

import { colors } from "../../../../Styles/colors";

export const styles = EStyleSheet.create({
  ratingNumber: {
    marginRight: ".5rem",
    fontSize: "1rem",
    color: colors.textColor,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "1rem",
  },
});
