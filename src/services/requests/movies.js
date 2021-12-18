import { api } from "../common/http";

const genres = {
  12: "Aventura",
  14: "Fantasia",
  16: "Animação",
  18: "Drama",
  27: "Terror",
  28: "Ação",
  35: "Comédia",
  36: "História",
  37: "Faroeste",
  53: "Suspense",
  80: "Crime",
  99: "Documentário",
  878: "Ficção científica",
  9648: "Mystery",
  10402: "Musical",
  10749: "Comédia romântica",
  10751: "Família",
  10752: "Guerra",
  10770: "TV",
};

export const getMovies = async (page) => {
  const { data } = await api.get(`&page=${page}`);
  const { results } = data;

  return results.map(
    ({ id, title, vote_average, overview, release_date, genre_ids }) => ({
      key: String(id),
      title: title,
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );
};
