import { Request, Response } from "express";
import { foodRiskService } from "../services/foodRiskService";

export async function findRiskController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const query = req.query.query as string;

    if (!query) {
      res.status(400).json({
        error: "Query parameter is required",
        message: "Please provide a food name using ?query=<food_name>",
      });
      return;
    }

    if (query.trim().length === 0) {
      res.status(400).json({
        error: "Invalid query parameter",
        message: "Query parameter cannot be empty",
      });
      return;
    }

    const result = await foodRiskService.findFoodRisk(query);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error in findRiskController:", error);

    if (error instanceof Error) {
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to analyze food risk. Please try again later.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    } else {
      res.status(500).json({
        error: "Internal server error",
        message: "An unexpected error occurred",
      });
    }
  }
}
