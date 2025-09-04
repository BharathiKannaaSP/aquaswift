import { v } from 'convex/values';
import { mutation } from '../_generated/server';

export const updateUser = mutation({
  args: {
    username: v.string(),
    email: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, { username, email, userId }) => {
    const existingUser = await ctx.db
      .query('user')
      .withIndex('by_user_id', (q) => q.eq('userId', userId))
      .first();

    if (existingUser) {
      await ctx.db.patch(existingUser._id, {
        username,
        email,
      });
      return existingUser._id;
    }

    const newUser = await ctx.db.insert('user', {
      username,
      email,
      userId,
    });
    return newUser;
  },
});
