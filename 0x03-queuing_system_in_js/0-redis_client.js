import { createClient } from 'redis';

const redisConnect = () => {
  const client = createClient();

  client.on('connect', () => {
    console.log('Redis client connected to the server');
  });

  client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
  });
};

redisConnect();
