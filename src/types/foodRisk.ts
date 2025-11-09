export type RiskLevel =
  | "LOW"
  | "LOW_MODERATE"
  | "MODERATE"
  | "MODERATE_HIGH"
  | "HIGH";

export interface PurineContent {
  value: number;
  unit: string;
}

export interface OverallRisk {
  level: RiskLevel;
  purine_content: PurineContent;
}

export interface Summary {
  quick_summary: string;
  guideline: string;
}

export interface Variety {
  name: string;
  risk_level: RiskLevel;
  notes: string;
}

export interface Reference {
  description: string;
  source_url: string;
}

export interface FoodRiskResponse {
  food: string;
  overall_risk: OverallRisk;
  summary: Summary;
  varieties: Variety[];
  reference: Reference;
}
