import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectDatabase } from './database';
import { typeDefs, resolvers } from './graphql';

const port = process.env.PORT || 9000;

// CORS
// app.use((_req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS'
//   );
//   next();
// });
/////////////////////////////////////////////////////////////////////////////

const mount = async (app: Application) => {
  try {
    const db = await connectDatabase();
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({ db }),
    });
    server.applyMiddleware({ app, path: '/api' });
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
    });
    const listings = await db.listings.find({}).toArray();
    console.log(listings);
  } catch (error) {
    console.log(error);
  }
};
mount(express());
