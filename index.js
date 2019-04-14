const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers.js');
const { getUserFromToken } = require('./lib/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // const token = req.headers.authorization || "";
    // const user = getUserFromToken(token);
    const user = {first_name: "satomi", user_id: 257}; // for Ex
    return { user };
  }
});

server.listen()
      .then(() => console.log("server listening on port 4000"))
      .catch(err => console.log(err));