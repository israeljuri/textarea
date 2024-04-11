import Redis from 'ioredis';

const redis = new Redis(process.env.DATABASE_URL || '');

export default redis;
