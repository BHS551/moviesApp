import moviesService from "../services/movies.service"

const listMovies = async (req, res, next) => {
  res.json({ status: 0 })
}

const insertMovie = async (req, res, next) => {
  const { name, author } = req.body
  const movie: CreateMovieDto = {
    name, author
  }
  const response = await moviesService.insertMovie(movie)
  res.json(response)
}


export default { listMovies, insertMovie }
