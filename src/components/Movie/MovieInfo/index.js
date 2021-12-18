import React from "react";
import { View, Text } from "react-native";

import MovieReleaseDate from "./MovieReleaseDate";
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";
import MovieGenre from "./MovieGenre";
import { colors } from "../../../Styles/colors";
import { styles } from "./styles";
import { useOrientation } from "../../../hooks/useOrientation";

export default function MovieInfo({ item }) {
  const orientation = useOrientation();

  return (
    <View
      style={orientation.isPortrait ? styles.portrait : styles.landscapet}
    >
      <MovieReleaseDate>
        Data de lançamento: {item?.releaseDate}
      </MovieReleaseDate>

      <MovieTitle>{item?.title}</MovieTitle>

      <MovieDescription>
        {item?.description ? item?.description : "Sem descrição"}
      </MovieDescription>

      <MovieGenre>
        {item?.genres.map((genre, index, row) => (
          <Text key={index} style={{ color: colors.default }}>
            {index + 1 === row.length ? genre : genre + " • "}
          </Text>
        ))}
      </MovieGenre>
    </View>
  );
}
