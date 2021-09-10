import { gql } from "apollo-server-express";

const schema = gql(`
  type Movie {
    _id: String
    name: String
    author: String
	}
  input CreateMovie {
    name: String
    author: String
  }
  type Query {
    movies: [Movie]
  }
  type Mutation {
    createMovie(name:String, author:String): Movie
  }
`)

export default schema