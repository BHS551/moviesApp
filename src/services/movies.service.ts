import IMovie from "../interfaces";
import { moviesRepository } from "../repositories";

const createMovie = async (movie: CreateMovieDto): Promise<IMovie> => {
  return await moviesRepository.createMovie(movie)
}

const getMovies = async (): Promise<IMovie[]> => {
  return await moviesRepository.getMovies();
}

export default { createMovie, getMovies }