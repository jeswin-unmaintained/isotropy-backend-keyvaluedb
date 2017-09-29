import Redis from "ioredis";

export async function put(connStr, data) {
  const redis = new Redis(connStr);
  return await redis.set(data);
}

export async function get(connStr, data) {
  const redis = new Redis(connStr);
  return await redis.get(data);
}

export async function del(connStr, data) {
  const redis = new Redis(connStr);
  return await redis.del(data);
}

export async function flushdb(connStr) {
  const redis = new Redis(connStr);
  return await redis.flushdb();
}

export async function exists(connStr, data) {
  const redis = new Redis(connStr);
  return await redis.exists(data);
}