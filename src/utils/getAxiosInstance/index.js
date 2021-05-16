import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import axiosRetry from 'axios-retry';
import { v4 as generator } from 'uuid';
// Generate a key to use caching requests.
const cacheKey = generator().replace(/-/g, '');
// Create `axios-cache-adapter` instance
// maxAge 60 min
const cache = setupCache({
  // {Number} Maximum time for storing each request in milliseconds
  maxAge: 60 * 60 * 1000,
  // {Object} Define which kind of requests should be excluded from cache.
  exclude: {
    // {Boolean} Exclude requests with query parameters.
    query: false,
  },
  // {Boolean} Clear cached item when it is stale.
  clearOnStale: true,
  // {Boolean} Clear all cache when a cache write error occurs
  // (prevents size quota problems in `localStorage`).
  clearOnError: true,
  // {Function|Boolean} Determine if stale cache should be read when a network error occurs.
  readOnError: false,
  // {String|Function} Generate a unique cache key for the request.
  // Will use request url and serialized params by default.
  key: (req) => {
    let key = encodeURIComponent(`${req.url}///${cacheKey}`);
    return key;
  },
  // {Function} Invalidate stored cache. By default will remove cache when
  // making a request with method not `GET` query.
  invalidate: async (cfg, req) => {
    const method = req.method.toLowerCase();
    if (method !== 'get') {
      await cfg.store.removeItem(cfg.uuid);
    }
  },
  debug: false, // process.env.NODE_ENV !== 'production',
});

export default () => {
  const baseURL = process.env.API_URL;

  try {
    const headers = {
      'Content-Type': 'application/json',
      'x-smartgift-app-id': process.env.APP_ID,
      'x-smartgift-app-secret': process.env.APP_SECRET,
    };
    const instance = axios.create({
      baseURL,
      headers,
      adapter: cache.adapter,
      // withCredentials: true,
      // validateStatus: () => true,
    });

    axiosRetry(instance, {
      retries: 3,
      retryDelay: (retryCount) => {
        return retryCount * 1000;
      },
      retryCondition: () => true,
    });

    return instance;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('axios client error: ', error);
  }
};
