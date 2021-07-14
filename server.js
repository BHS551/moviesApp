import express from 'express'
import {} from 'dotenv/config'
import config from './src/config/index.js'
import { moviesRouter } from './src/routes/index.js'

const app = express()

app.use(moviesRouter)

app.get('/', function(req, res) { res.status(200).send({ status: 'OKasdasdasdasasdasdaasdasdsdasd' })})

app.listen(config.app.port, () => {
	console.log(`Listening on ${config.app.port}`)
})

export default app
