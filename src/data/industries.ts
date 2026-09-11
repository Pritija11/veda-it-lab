import { Landmark, HeartPulse, Sprout, ShoppingBag, Cog, Building2 } from "lucide-react";

export const industries = [
  {
    slug: "finance",
    label: "Finance",
    icon: Landmark,
    bg: "#B9C7FF",
    hint: "Fraud detection, forecasting",
    description:
      "Fraud detection, credit risk, and forecasting models built to work with the volume and sensitivity financial data demands.",
    useCases: [
      "Transaction fraud detection",
      "Credit risk scoring",
      "Cash flow forecasting",
      "Anti-money-laundering pattern detection",
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    bg: "#BDEBFF",
    hint: "Document intelligence, triage",
    description:
      "Document intelligence and triage support that helps clinical and administrative teams move faster without cutting corners.",
    useCases: [
      "Clinical document extraction",
      "Patient intake triage",
      "Insurance claims processing",
      "Appointment no-show prediction",
    ],
  },
  {
    slug: "agriculture",
    label: "Agriculture",
    icon: Sprout,
    bg: "#BDF3D2",
    hint: "Crop and yield prediction",
    description:
      "Crop and yield prediction models built on real field data, not idealized lab conditions.",
    useCases: [
      "Crop yield prediction",
      "Pest and disease detection from imagery",
      "Irrigation scheduling",
      "Soil health monitoring",
    ],
  },
  {
    slug: "retail",
    label: "Retail",
    icon: ShoppingBag,
    bg: "#FFBBD8",
    hint: "Recommendation, demand forecasting",
    description:
      "Recommendation and demand forecasting systems that turn browsing and purchase data into better decisions.",
    useCases: [
      "Product recommendations",
      "Demand forecasting",
      "Dynamic pricing signals",
      "Inventory optimization",
    ],
  },
  {
    slug: "operations",
    label: "Operations",
    icon: Cog,
    bg: "#FFD0B8",
    hint: "Process automation, anomaly detection",
    description:
      "Process automation and anomaly detection for the operational systems that keep a business running.",
    useCases: [
      "Workflow automation",
      "Equipment anomaly detection",
      "Quality control vision checks",
      "Predictive maintenance",
    ],
  },
  {
    slug: "enterprise",
    label: "Enterprise",
    icon: Building2,
    bg: "#FFF09A",
    hint: "Internal copilots, agentic workflows",
    description:
      "Internal copilots and agentic workflows that make existing teams faster without adding headcount.",
    useCases: [
      "Internal knowledge copilots",
      "Agentic workflow automation",
      "Document search and summarization",
      "Meeting and report automation",
    ],
  },
] as const;
