import { gql } from "apollo-server-express";

const schema = gql(`
  type Movie {
	  id: Int
	  name: String
    author: String
	}
  type Query {
    movies: [Movie]
  }
  type Mutation {
    createMovie(name: String, author: String): String
  }
`)

export default schema