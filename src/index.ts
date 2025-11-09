import express, { Request, Response } from "express";
import { FoodRiskResponse } from "./types/foodRisk";
import { mockFoodData } from "./data/mockFoodData";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Helper function to get random food when query doesn't match
function getRandomFoodRisk(queryFood: string): FoodRiskResponse {
  const foods = Object.keys(mockFoodData);
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  const data = mockFoodData[randomFood];

  // Randomize some values to make it more dynamic
  const purineVariation = Math.floor(Math.random() * 20) - 10; // -10 to +10
  const newValue = Math.max(
    0,
    data.overall_risk.purine_content.value + purineVariation
  );

  return {
    ...data,
    food: queryFood.charAt(0).toUpperCase() + queryFood.slice(1),
    overall_risk: {
      ...data.overall_risk,
      purine_content: {
        value: newValue,
        unit: data.overall_risk.purine_content.unit,
      },
    },
  };
}

// Healthcheck endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// Find risk endpoint
app.get("/find-risk", (req: Request, res: Response) => {
  const query = req.query.query as string;

  if (!query) {
    return res.status(400).json({
      error: "Query parameter is required",
      message: "Please provide a food name using ?query=<food_name>",
    });
  }

  const normalizedQuery = query.toLowerCase().trim();

  // Check if we have exact match in mock data
  if (mockFoodData[normalizedQuery]) {
    return res.status(200).json(mockFoodData[normalizedQuery]);
  }

  // Otherwise return random food data with the queried food name
  const randomResponse = getRandomFoodRisk(query);
  res.status(200).json(randomResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
