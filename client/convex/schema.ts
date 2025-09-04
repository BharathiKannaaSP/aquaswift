import { v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';

export default defineSchema({
  user: defineTable({
    username: v.string(),
    email: v.string(),
    userId: v.string(),
  })
    .index('by_user_id', ['userId'])
    .index('by_email', ['email']),
});
