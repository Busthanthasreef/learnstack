import type { TopicContent } from "../../types";

import javascript from "./javascript";
import advancedJavascript from "./advanced-javascript";
import nodejs from "./nodejs";
import mongodb from "./mongodb";
import dsaBasics from "./dsa-basics";
import dsaIntermediate from "./dsa-intermediate";
import dsaAdvanced from "./dsa-advanced";
import ooadOop from "./ooad-oop";
import advancedMongodb from "./advanced-mongodb";
import sql from "./sql";
import advancedSql from "./advanced-sql";
import typescript from "./typescript";

export const learningContent: Record<string, TopicContent> = {
  "javascript": javascript,
  "advanced-javascript": advancedJavascript,
  "nodejs": nodejs,
  "mongodb": mongodb,
  "dsa-basics": dsaBasics,
  "dsa-intermediate": dsaIntermediate,
  "dsa-advanced": dsaAdvanced,
  "ooad-oop": ooadOop,
  "advanced-mongodb": advancedMongodb,
  "sql": sql,
  "advanced-sql": advancedSql,
  "typescript": typescript,
};

