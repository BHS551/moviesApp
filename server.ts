import App from './src/app'
import {} from 'dotenv/config'

import config from './src/config'
import { moviesRouter } from './src/routes'
import { moviesResolver } from './src/resolvers'
import Server from './src/server'

// Rest implementation
// const routers = [ moviesRouter ]
// const app = new App(routers, +config.app.port)

const resolvers = {
  ...moviesResolver
}

const server = new Server(resolvers);
server.startApolloServer();

export default server
