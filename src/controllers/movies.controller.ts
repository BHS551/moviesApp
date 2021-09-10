import moviesService from "../services/movies.service"

const listMovies = async (req, res, next) => {
  res.json({ status: 0 })
}

const createMovie = async (req, res, next) => {
  const { name, author } = req.body
  const movie: CreateMovieDto = {
    name, author
  }
  const response = await moviesService.createMovie(movie)
  res.json(response)
}


export default { listMovies, createMovie }
