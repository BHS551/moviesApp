import moviesResolver from "./moviesResolver";

const { movies, createMovie } = moviesResolver;

const graphqlResolvers = {
  Query: {
    movies
  },
  Mutation: {
    createMovie
  }
}

export { moviesResolver, graphqlResolvers }