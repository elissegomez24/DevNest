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

    // If the token is present, remove the "Bearer " from it
    if (token.startsWith('Bearer ')) {
        token = token.split(' ').pop().trim();
    }

    let user = {};

    // If there's a token, verify it
    if (token) {
        try {
            const { data } = jwt.verify(token, secret);
            req.user = await User.findById(data._id).select('-__v -password');
        } catch {
            console.log('Invalid token');
        }
    }

    return req;
};

const signToken = function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { authMiddleware, signToken, AuthenticationError };
