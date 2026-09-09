import type { Topic } from "../types";
import javascript from "./topics/javascript";
import nodejs from "./topics/nodejs";
import mongodb from "./topics/mongodb";
import dsaBasics from "./topics/dsa-basics";
import dsaIntermediate from "./topics/dsa-intermediate";
import dsaAdvanced from "./topics/dsa-advanced";
import ooadOop from "./topics/ooad-oop";
import advancedMongodb from "./topics/advanced-mongodb";
import sql from "./topics/sql";
import advancedSql from "./topics/advanced-sql";
import typescript from "./topics/typescript";

export const topics: Topic[] = [
  javascript,
  nodejs,
  mongodb,
  dsaBasics,
  dsaIntermediate,
  dsaAdvanced,
  ooadOop,
  advancedMongodb,
  sql,
  advancedSql,
  typescript
];

export function getFeaturedTopics(): Topic[] {
  return topics.filter(t => t.isFeatured);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}
