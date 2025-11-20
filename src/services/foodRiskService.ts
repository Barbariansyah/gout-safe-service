import { openai, OPENAI_MODEL } from "../config/openai";
import {
  SYSTEM_PROMPT,
  getUserPrompt,
  RESPONSE_SCHEMA,
} from "./prompts/foodRiskPrompt";
import { FoodRiskResponse } from "../types/foodRisk";

export class FoodRiskService {
  async findFoodRisk(query: string): Promise<FoodRiskResponse> {
    try {
      const completion = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: getUserPrompt(query),
          },
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "food_risk_response",
            strict: true,
            schema: RESPONSE_SCHEMA,
          },
        },
        temperature: 0.3,
      });

      const content = completion.choices[0]?.message?.content;

      if (!content) {
        throw new Error("No response content from OpenAI");
      }

      const parsedResponse: FoodRiskResponse = JSON.parse(content);
      return parsedResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`OpenAI API error: ${error.message}`);
      }
      throw new Error("Unknown error occurred while calling OpenAI API");
    }
  }
}

export const foodRiskService = new FoodRiskService();
