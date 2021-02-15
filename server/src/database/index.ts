import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import { MongoClient } from 'mongodb';
import { Database, User, Listing, Booking } from '../lib/types';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.xtc2o.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('main');
  return {
    bookings: db.collection<Booking>('bookings'),
    listings: db.collection<Listing>('listings'),
    users: db.collection<User>('users'),
  };
};
