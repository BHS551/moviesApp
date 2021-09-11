import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { createConnection } from "typeorm";
import { Movie } from "./entities";
import schema from "./schema";

class Server {
  private resolvers;
  private apolloServer: ApolloServer;
  private app: express.Application;

  constructor(resolvers) {
    this.resolvers = {...resolvers}
    this.apolloServer = new ApolloServer({ typeDefs: schema, resolvers: this.resolvers });
    this.app = express();
    this.initializeDatabaseConection()
  }

  public async startApolloServer() {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({path:'/graphql', app: this.app, cors: corsOptions });
    this.app.listen({ port: 4000 })
    console.info("app listening on port:", 4000)
  }

  public async initializeDatabaseConection() {
    const connection = await createConnection({
      type: "mongodb", 
      host: "localhost", 
      port: 27017,
      database: "movies-app",
      synchronize: true, 
      logging: true,
      logger: "file",
      useUnifiedTopology: true,
      entities: [
        Movie
      ],
    }).catch(err => {
      throw new Error(err)
    });
		if (connection === undefined) { throw new Error('Error connecting to database'); }
		connection.synchronize();
		console.info(`conected to database`)
  }

}

const corsOptions = {
  origin: '*',
  credentials: true,
  maxAge: 365 * 24 * 60 * 60
}

export default Server