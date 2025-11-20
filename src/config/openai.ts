import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "OPENAI_API_KEY is not defined in environment variables. Please check your .env file."
  );
}

export const openai = new OpenAI({
  apiKey: apiKey,
});

export const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
