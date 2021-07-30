import App from './src/app'
import {} from 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from './src/config'
import { moviesRouter } from './src/routes'

const routers = [ moviesRouter ]
const app = new App(routers, +config.app.port)

app.listen()

export default app
