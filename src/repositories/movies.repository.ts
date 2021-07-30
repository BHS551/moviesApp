import { Movie } from "../entities/movies";

const insertMovie = async (createMovieDto: CreateMovieDto) => {
  return await (await Movie.insert(createMovieDto)).generatedMaps
}

export default { insertMovie }