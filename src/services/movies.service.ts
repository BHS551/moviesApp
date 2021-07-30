import { moviesRepository } from "../repositories";

const insertMovie = async (movie: CreateMovieDto) => {
  return await moviesRepository.insertMovie(movie)
}

export default { insertMovie }