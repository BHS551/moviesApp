import App from './src/app'
import {} from 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from './src/config'
import { moviesRouter } from './src/routes'

const routers = [ moviesRouter ]
const app = new App(routers, +config.app.port)
app.listen()
// app.use(bodyParser.json({ limit: '16mb' }))
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(cors())
// app.options('*', cors())

// app.use(moviesRouter)

// app.listen(
//   config.app.port, () => {
//     console.log(`Listening on ${config.app.port}`)
// })

export default app
