# Gout Safe Service API

Base URL: `http://localhost:3000`

## Endpoints

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

---

### GET /find-risk
Get gout risk information for a specific food.

**Query Parameters:**
- `query` (required, string): Name of the food to check

**Example Request:**
```
GET /find-risk?query=chicken
```

**Response:**
```json
{
  "food": "Chicken",
  "overall_risk": {
    "level": "MODERATE",
    "purine_content": {
      "value": 157,
      "unit": "mg/100g"
    }
  },
  "summary": {
    "quick_summary": "Brief description of the food's gout risk",
    "guideline": "Consumption guidelines for gout sufferers"
  },
  "varieties": [
    {
      "name": "Variety name",
      "risk_level": "LOW_MODERATE",
      "notes": "Additional information"
    }
  ],
  "reference": {
    "description": "Scientific reference description",
    "source_url": "https://doi.org/..."
  }
}
```

**Risk Levels:**
- `LOW`: Safe to consume regularly
- `LOW_MODERATE`: Generally safe with minimal restrictions
- `MODERATE`: Safe in moderation, monitor portions
- `MODERATE_HIGH`: Limit consumption significantly
- `HIGH`: Avoid or consume very rarely

**Available Foods:**
- chicken
- salmon
- anchovy
- spinach
- tofu

**Note:** If queried food is not in the database, returns randomized mock data based on available foods.

**Error Response (400):**
```json
{
  "error": "Query parameter is required",
  "message": "Please provide a food name using ?query=<food_name>"
}
```
