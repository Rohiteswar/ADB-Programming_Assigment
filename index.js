const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server');

require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}/`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

