import { FoodRiskResponse } from "../types/foodRisk";

export const mockFoodData: Record<string, FoodRiskResponse> = {
  chicken: {
    food: "Chicken",
    overall_risk: {
      level: "MODERATE",
      purine_content: {
        value: 157,
        unit: "mg/100g",
      },
    },
    summary: {
      quick_summary:
        "Chicken is a moderate purine food that should be consumed in controlled portions.",
      guideline:
        "Safe to eat in moderation. Stick to 3-4 oz portions, prefer skinless breast meat.",
    },
    varieties: [
      {
        name: "Skinless chicken breast",
        risk_level: "LOW_MODERATE",
        notes: "Best choice, lean protein",
      },
      {
        name: "Chicken thigh (skinless)",
        risk_level: "MODERATE",
        notes: "Limit portions",
      },
      {
        name: "Chicken with skin",
        risk_level: "MODERATE_HIGH",
        notes: "Higher fat content, remove skin before eating",
      },
    ],
    reference: {
      description:
        "A review article measuring chicken meat from Thai native chickens lists total purine contents of ~142–173 mg/100 g in breast meat (depending on breed/age).",
      source_url: "https://doi.org/10.1016/j.meatsci.2016.08.006",
    },
  },
  salmon: {
    food: "Salmon",
    overall_risk: {
      level: "MODERATE",
      purine_content: {
        value: 120,
        unit: "mg/100g",
      },
    },
    summary: {
      quick_summary:
        "Salmon contains moderate levels of purines but is rich in omega-3 fatty acids.",
      guideline: "Can be eaten 2-3 times per week in 3-4 oz servings.",
    },
    varieties: [
      {
        name: "Wild-caught salmon",
        risk_level: "MODERATE",
        notes: "Rich in omega-3, anti-inflammatory benefits",
      },
      {
        name: "Farm-raised salmon",
        risk_level: "MODERATE",
        notes: "Similar purine content, may have higher fat",
      },
    ],
    reference: {
      description:
        "Studies show salmon contains moderate purine levels while providing beneficial omega-3 fatty acids.",
      source_url: "https://doi.org/10.1016/example.salmon.study",
    },
  },
  anchovy: {
    food: "Anchovies",
    overall_risk: {
      level: "HIGH",
      purine_content: {
        value: 325,
        unit: "mg/100g",
      },
    },
    summary: {
      quick_summary:
        "Anchovies are very high in purines that can raise uric acid levels.",
      guideline:
        "Avoid or eat very rarely in minimal amounts (1–2 small fillets maximum).",
    },
    varieties: [
      {
        name: "Fresh anchovies",
        risk_level: "HIGH",
        notes: "Very high purine content",
      },
      {
        name: "Canned anchovies",
        risk_level: "HIGH",
        notes: "Also high in sodium, double risk",
      },
    ],
    reference: {
      description:
        "Anchovies are classified as very high purine foods and should be avoided by those with gout.",
      source_url: "https://doi.org/10.1016/example.anchovy.study",
    },
  },
  spinach: {
    food: "Spinach",
    overall_risk: {
      level: "LOW_MODERATE",
      purine_content: {
        value: 63,
        unit: "mg/100g",
      },
    },
    summary: {
      quick_summary:
        "Spinach contains moderate purines but plant-based purines have less impact on uric acid.",
      guideline: "Safe to eat regularly as part of a balanced diet.",
    },
    varieties: [
      {
        name: "Fresh spinach",
        risk_level: "LOW_MODERATE",
        notes: "High in nutrients, low gout risk despite purine content",
      },
      {
        name: "Cooked spinach",
        risk_level: "LOW_MODERATE",
        notes: "Concentrated nutrients, same purine considerations",
      },
    ],
    reference: {
      description:
        "Research shows plant-based purines from vegetables like spinach don't significantly increase gout risk.",
      source_url: "https://doi.org/10.1016/example.vegetable.study",
    },
  },
  tofu: {
    food: "Tofu",
    overall_risk: {
      level: "LOW",
      purine_content: {
        value: 35,
        unit: "mg/100g",
      },
    },
    summary: {
      quick_summary:
        "Tofu is a low purine food and excellent protein alternative for gout sufferers.",
      guideline: "Safe to eat daily as a protein source.",
    },
    varieties: [
      {
        name: "Soft tofu",
        risk_level: "LOW",
        notes: "Excellent for soups and smoothies",
      },
      {
        name: "Firm tofu",
        risk_level: "LOW",
        notes: "Great for stir-fries and grilling",
      },
    ],
    reference: {
      description:
        "Soy products like tofu are considered safe for people with gout and may even help reduce uric acid levels.",
      source_url: "https://doi.org/10.1016/example.soy.study",
    },
  },
};
