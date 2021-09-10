import IMovie from "../interfaces";
import { moviesService } from "../services";

const createMovie = {
  createMovie: async (temp, input): Promise<IMovie> => {
    const { name, author } = input;
    const createMovieDto: CreateMovieDto = {
      name, author
    };
    return await moviesService.createMovie(createMovieDto);
}}

const movies = async () => {
  return await moviesService.getMovies();
}

export default { createMovie: createMovie.createMovie, movies }