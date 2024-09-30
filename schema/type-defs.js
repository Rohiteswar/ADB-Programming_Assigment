const { gql } = require("apollo-server");

const typeDefs = gql `
    type User {
        id: Int!
        name: String!
        age: Int
        gender: String
    }

    type Movie {
        id: String!
        title: String!
        description: String
        age_certification: String
        release_year: Int
        runtime: Int
        genres: [String]
        production_countries: [String]
        type: String
        imdb_score: Float
    }

    type Query {
        getUsers: [User!]!
        getMovies: [Movie!]!
        getMovieByTitle(title: String!): Movie
    }

    input UserInput {
        id: Int!
        name: String!
        age: Int
        gender: String
    }

    input MovieInput {
        id: String!
        title: String!
        description: String
        age_certification: String
        release_year: Int
        runtime: Int
        genres: [String]
        production_countries: [String]
        type: String
        imdb_score: Float
    }

    input UpdateMovieInput {
        title: String!
        description: String
        runtime: Int
        genres: [String]
        imdb_score: Float
    }

    type Mutation {
        createUser(userInput: UserInput): User!
        createMovie(movieInput: MovieInput): Movie!
        updateMovie(movieInput: UpdateMovieInput): Movie!
        deleteMovie(title: String!): String!
    }
`;

module.exports = { typeDefs };
