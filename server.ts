import {} from 'dotenv/config'

import Server from './src/server'
import { graphqlResolvers } from './src/resolvers'

// Rest implementation
// const routers = [ moviesRouter ]
// const app = new App(routers, +config.app.port)

const server = new Server(graphqlResolvers);
server.startApolloServer();

export default server
