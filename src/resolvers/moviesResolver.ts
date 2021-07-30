import { Movie } from "../entities/movies";

const createMovie = (name:string, author: string): string => {
  const movie= {
    id: 123,
    name,
    author
  }
  return JSON.stringify(movie)
}

export default { createMovie }