import { getConnection } from "typeorm";
import { Movie } from "../entities/movies";

const insertMovie = async (movie: CreateMovieDto) => {
  const movieConection = getConnection().getRepository(Movie)
  return await movieConection.insert(movie)
}

export default { insertMovie }