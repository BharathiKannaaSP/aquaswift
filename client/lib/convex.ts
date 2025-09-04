import { ConvexHttpClient } from 'convex/browser';

export const getConvexClient = () => {
  if (!process.env.VITE_CONVEX_PUBLIC_URL) {
    throw new Error('VITE_CONVEX_URL is not available!');
  }
  return new ConvexHttpClient(process.env.VITE_CONVEX_PUBLIC_URL);
};
