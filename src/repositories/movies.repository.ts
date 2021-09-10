import { getConnection, getMongoRepository } from "typeorm";
import { Movie } from "../entities";
import IMovie from "../interfaces";

const createMovie = async (createMovieDto: CreateMovieDto): Promise<IMovie> => {
  const movie = new Movie();
  try {
    const { name, author } = createMovieDto
    movie.name = name;
    movie.author = author
    const moviesRepository = await getConnection().getRepository(Movie);
    const response = await moviesRepository.save(movie);
    return response
  } catch (err) {
    console.log("mongo error: ", err)
  }
}

const getMovies = async (): Promise<IMovie[]> => {
  try {
    const moviesRepository = await getMongoRepository(Movie);
    const response = await moviesRepository.findOne("613ae7fa77d2b35661e9b4e1");
    console.log(response)
    return response;
  } catch (err) {
    console.log(err)
  }
}

export default { createMovie, getMovies }