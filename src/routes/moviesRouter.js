import express from 'express'
import { moviesController } from '../controllers/index.js'

const moviesRouter = express.Router()

moviesRouter.get('/movies', moviesController.listMovies)

export default moviesRouter
