const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { GraphQLError } = require('graphql');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

const  AuthenticationError = new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  })

const authMiddleware = async ({ req }) => {
    // Set token to be used for authentication
    let token = req.headers.authorization || '';

        // We split the token string into an array and return actual token
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return the request object so it can be passed to the resolver as `context`
        return req;
    },
    signToken: function ({ email, name, _id }) {
        const payload = { email, name, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

module.exports = { authMiddleware, signToken, AuthenticationError };
