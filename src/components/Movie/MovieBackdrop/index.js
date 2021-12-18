import React from "react";
import { Image } from "react-native";

import { useOrientation } from "../../../hooks/useOrientation";
import { styles } from "./styles";

export default function MovieBackdrop({ urlImage }) {
  const orientation = useOrientation();

  return (
    <Image
      source={
        (urlImage?.slice(-4) !== "null") || (urlImage === undefined)
          ? { uri: urlImage }
          : require("../../../assets/img/image-unavailable.png")
      }
      style={
        orientation.isPortrait ? styles.portrait : styles.landscapet
      }
    />
  );
}
