require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const { ApolloServer } = require('@apollo/server');
const { authMiddleware } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

const startApolloServer = async () => {
  await server.start();
  console.log("Apollo Server started");

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Important for MERN Setup: When our application runs from production, it functions slightly differently than in development
  // In development, we run two servers concurrently that work together
  // In production, our Node server runs and delivers our client-side bundle from the dist/ folder 
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // Log when MongoDB is connected successfully
  mongoose.connection.once('open', () => {
    console.log('Successfully connected to MongoDB!');

    app.listen(PORT, HOST, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call to start Apollo Server
startApolloServer(); 