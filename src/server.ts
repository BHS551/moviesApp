import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { Connection, createConnection } from "typeorm";
import schema from "./schema";

class Server {
  private resolvers;
  private apolloServer: ApolloServer;
  private app: express.Application;
  private connection: Connection;

  constructor(resolvers) {
    this.resolvers = {
      Query: {
        ...resolvers,
      },
    }
    this.apolloServer = new ApolloServer({ typeDefs: schema, rootValue: this.resolvers });
    this.app = express();
    this.initializeDatabaseConection()
  }

  public async startApolloServer() {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app: this.app, cors: corsOptions });
    this.app.listen({ port: 4000 })
    console.info("app listening on port:", 4000)
  }

  public async initializeDatabaseConection() {
    const connection = await createConnection();
		if (connection === undefined) { throw new Error('Error connecting to database'); } // In case the connection failed, the app stops.
		connection.synchronize(); // this updates the database schema to match the models' definitions
		this.connection = connection; // Store the connection object in the class instance.
		console.info(`conected to database`)
  }

}

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  maxAge: 365 * 24 * 60 * 60
}

export default Server