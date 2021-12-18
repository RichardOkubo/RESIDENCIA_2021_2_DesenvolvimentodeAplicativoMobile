import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";

import MovieBackdrop from "./MovieBackdrop";
import SecundaryInfo from "./SecundaryInfo";
import MovieInfo from "./MovieInfo";
import { useOrientation } from "../../hooks/useOrientation";
import { styles } from "./styles";

export default function Movie({ item }) {
  const orientation = useOrientation();
  const [urlImage, setUrlImage] = useState();

  useEffect(() => {
    async function fetchData(key) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${key}?api_key=345411636508e2b74308228fcfc87973&language=pt-BR`
      );

      setUrlImage("https://image.tmdb.org/t/p/original" + data?.backdrop_path);
    }
    fetchData(item.key);

    return () => setUrlImage("");
  }, []);

  return (
    <View style={orientation.isPortrait ? styles.portrait : styles.landscapet}>
      <MovieBackdrop urlImage={urlImage} />

      <View style={orientation.isPortrait ? null : null}>
        {orientation.isPortrait ? <SecundaryInfo item={item} /> : <></>}

        <MovieInfo item={item} />

        {orientation.isPortrait ? <></> : <SecundaryInfo item={item} />}
      </View>
    </View>
  );
}
