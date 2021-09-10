import express from 'express'
import { moviesController } from '../controllers'

const moviesRouter = express.Router()

moviesRouter.get('/movies', moviesController.listMovies)

moviesRouter.post('/movies', moviesController.createMovie)

export default moviesRouter
