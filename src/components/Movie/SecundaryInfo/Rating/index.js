import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

export default function Rating({ rating }) {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill("staro");
  const r = [...Array(filledStars).fill("star"), ...maxStars];

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      {r.map((icon, key) => {
        return <AntDesign key={key} name={icon} size={16} color="#FFD700" />;
      })}
    </View>
  );
}
