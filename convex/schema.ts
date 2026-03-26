import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Id jest automatycznie generowany przez Convex
// createdAt jest automatycznie generowany przez Convex

export default defineSchema({
  userProfiles: defineTable({
    userId: v.string(), // Better Auth user ID
    role: v.union(v.literal("student"), v.literal("teacher"), v.literal("admin")),
    dateOfBirth: v.number(),
    faculty: v.string(),
  }),
  
  conversations: defineTable({}),

  conversationMembers: defineTable({
    conversationId: v.id("conversations"),
    userId: v.string(), // Better Auth user ID
  }),

  messages: defineTable({
    conversationId: v.id("conversations"),
    userId: v.string(), // Better Auth user ID
    content: v.string(),
  }),

  notifications: defineTable({
    userId: v.string(), // Better Auth user ID
    type: v.union(v.literal("new_message"), v.literal("forum_reply"), v.literal("new_material")),
    content: v.string(),
    isRead: v.boolean(),
  }),

  courseResources: defineTable({
    courseId: v.id("courses"),
    uploadedBy: v.string(), // Better Auth user ID
    title: v.string(),
    description: v.string(),
    fileUrl: v.string(),
  }),

  courses: defineTable({
    teacherId: v.string(), // Better Auth user ID
    name: v.string(),
    description: v.string(),
    startDate: v.number(),
    endDate: v.number(),
    updatedAt: v.number(),
  }),

  courseAnnouncements: defineTable({
    courseId: v.id("courses"),
    createdBy: v.string(), // Better Auth user ID
    title: v.string(),
    content: v.string(),
  }),

  courseParticipants: defineTable({
    courseId: v.id("courses"),
    userId: v.string(), // Better Auth user ID
  }),

  forumPosts: defineTable({
    userId: v.string(), // Better Auth user ID
    parentPostId: v.optional(v.id("forumPosts")),
    title: v.string(),
    content: v.string(),
    tags: v.array(v.string()),
    updatedAt: v.number(),
  }),

  calendarEvents: defineTable({
    createdBy: v.string(), // Better Auth user ID
    title: v.string(),
    description: v.string(),
    startDate: v.number(),
    endDate: v.number(),
    status: v.boolean(), // true = trwają
    type: v.union(v.literal("lecture"), v.literal("assignment"), v.literal("exam"), v.literal("other")),
  }),

  eventParticipants: defineTable({
    userId: v.string(), // Better Auth user ID
    eventId: v.id("calendarEvents"),
  }),
});
