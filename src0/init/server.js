import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from '../schema.graphql';
import {resolvers} from '../resolvers';

const app = express();

const server = new ApolloServer({
typeDefs: schema,
resolvers
});

server.applyMiddleware({app});

export {server, app};