import { Sparkles, Bot, Database, ScanEye, Cog } from "lucide-react";

export const pillars = [
  {
    id: "applied-ai",
    number: "01",
    icon: Sparkles,
    title: "Applied AI & Machine Learning",
    description:
      "Custom ML models and AI-native product features — recommendation systems and decision support built into the software your team already ships.",
    accent: "ivory",
    size: "large",
  },
  {
    id: "generative-agentic-ai",
    number: "02",
    icon: Bot,
    title: "Generative & Agentic AI",
    description:
      "LLM applications, RAG systems, and multi-step agents connected to real business processes — not a chatbot bolted onto a website.",
    accent: "pink",
    size: "small",
  },
  {
    id: "data-intelligence",
    number: "03",
    icon: Database,
    title: "Data & Intelligence",
    description:
      "Data pipelines, forecasting, and anomaly detection. AI is only as good as the data underneath it — this is where that gets built.",
    accent: "mint",
    size: "small",
  },
  {
    id: "computer-vision-document-ai",
    number: "04",
    icon: ScanEye,
    title: "Computer Vision & Document AI",
    description:
      "Object detection, visual inspection, OCR, and intelligent document processing — the unglamorous, real-world half of applied AI.",
    accent: "sky",
    size: "small",
  },
  {
    id: "ai-engineering-deployment",
    number: "05",
    icon: Cog,
    title: "AI Engineering & Deployment",
    description:
      "MLOps, model monitoring, and production infrastructure. We don't just prototype AI — we engineer it into systems that stay in production.",
    accent: "peach",
    size: "small",
  },
] as const;
