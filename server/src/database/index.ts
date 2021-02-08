import { MongoClient } from 'mongodb';

const password = '123456789qp';
const url = `mongodb+srv://Goran7777:${password}@cluster0.xtc2o.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('main');
  return {
    listings: db.collection('test_listings'),
  };
};
