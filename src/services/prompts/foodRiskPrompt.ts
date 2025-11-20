export const SYSTEM_PROMPT = `You are a knowledgeable gout dietary advisor and nutritionist specializing in purine content analysis. Your role is to help people with gout or hyperuricemia understand the risk level of different foods.

When analyzing a food item, you must:
1. Assess the purine content in mg per 100g serving
2. Classify the overall risk level (LOW, LOW_MODERATE, MODERATE, MODERATE_HIGH, HIGH) based on:
   - LOW: 0-50 mg purines per 100g
   - LOW_MODERATE: 51-100 mg purines per 100g
   - MODERATE: 101-150 mg purines per 100g
   - MODERATE_HIGH: 151-200 mg purines per 100g
   - HIGH: >200 mg purines per 100g
3. Provide a quick summary of the food's gout risk
4. Offer practical guidelines for consumption
5. List common varieties (if applicable) with their specific risk levels
6. Cite credible sources or reference medical guidelines

Base your analysis on evidence-based nutritional data, medical research, and established dietary guidelines for gout management. Be precise with purine content values and conservative with risk assessments to prioritize user safety.`;

export const getUserPrompt = (foodQuery: string): string => {
  return `Analyze the gout risk for: "${foodQuery}"

Provide a comprehensive assessment including:
- The exact purine content (mg per 100g)
- Overall risk level for people with gout
- A brief summary explaining why this food has this risk level
- Practical consumption guidelines
- Different varieties or preparations if relevant (e.g., raw vs cooked, different cuts)
- Reference to credible sources (medical journals, nutrition databases, or health organizations)

Be specific and evidence-based in your response.`;
};

export const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    food: {
      type: "string",
      description: "The name of the food being analyzed",
    },
    overall_risk: {
      type: "object",
      properties: {
        level: {
          type: "string",
          enum: ["LOW", "LOW_MODERATE", "MODERATE", "MODERATE_HIGH", "HIGH"],
          description: "The overall gout risk level",
        },
        purine_content: {
          type: "object",
          properties: {
            value: {
              type: "number",
              description: "Purine content value",
            },
            unit: {
              type: "string",
              description: "Unit of measurement (e.g., 'mg/100g')",
            },
          },
          required: ["value", "unit"],
        },
      },
      required: ["level", "purine_content"],
    },
    summary: {
      type: "object",
      properties: {
        quick_summary: {
          type: "string",
          description:
            "A brief 1-2 sentence summary of the food's gout risk",
        },
        guideline: {
          type: "string",
          description:
            "Practical consumption guidelines for people with gout",
        },
      },
      required: ["quick_summary", "guideline"],
    },
    varieties: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Name of the variety or preparation",
          },
          risk_level: {
            type: "string",
            enum: ["LOW", "LOW_MODERATE", "MODERATE", "MODERATE_HIGH", "HIGH"],
            description: "Risk level for this specific variety",
          },
          notes: {
            type: "string",
            description: "Additional notes about this variety",
          },
        },
        required: ["name", "risk_level", "notes"],
      },
      description:
        "Different varieties, preparations, or cuts with their specific risk levels",
    },
    reference: {
      type: "object",
      properties: {
        description: {
          type: "string",
          description: "Description of the source or reference",
        },
        source_url: {
          type: "string",
          description: "URL to the source (use reputable medical/nutrition sites)",
        },
      },
      required: ["description", "source_url"],
    },
  },
  required: ["food", "overall_risk", "summary", "varieties", "reference"],
  additionalProperties: false,
};
