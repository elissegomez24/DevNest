const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Using environment variable for security (recommended)
const secret = process.env.JWT_SECRET || 'mysecretsshhhhh';
const expiration = '2h';

const AuthenticationError = new GraphQLError('Could not authenticate user.', {
    extensions: {
        code: 'UNAUTHENTICATED',
    }
});

const authMiddleware = async ({ req }) => {
    let token = req.headers.authorization || '';

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        return req;

    }

    try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        const user = await User.findById(data._id);
        
        if (!user) {
            throw new AuthenticationError;
        }
        
        req.user = data;
    } catch (error) {
        console.log('Authentication error:', error.message);
        throw new AuthenticationError;
    }

    return req;
};

const signToken = function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = { authMiddleware, signToken, AuthenticationError };