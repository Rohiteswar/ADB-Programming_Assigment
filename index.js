const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server');

require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.DB_URL, {}).then(() => {
    console.log("Connected to MongoDB");
    return server.listen();
}).then((res) => {
    console.log(`Server running at ${res.url}`);
}).catch((err) => console.log(`Error: ${err}`));
