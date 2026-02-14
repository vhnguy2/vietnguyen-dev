export type AILevel = "core" | "auxiliary" | "integration" | "none";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  build: string;
  result: string;
  tech: string[];
  aiLevel: AILevel;
  aiDetail: string;
  liveUrl?: string;
  liveLabel?: string;
  demoVideo?: string;
  github?: string;
  featured?: boolean;
  gridSpan?: "wide" | "tall" | "large" | "normal";
}

export const AI_LABELS: Record<AILevel, { label: string; color: string }> = {
  core: { label: "AI Core Feature", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" },
  auxiliary: { label: "AI Core Feature", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" },
  integration: { label: "AI Core Feature", color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10" },
  none: { label: "Full-Stack", color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" },
};

export const projects: Project[] = [
  {
    id: "spendsense",
    name: "SpendSense",
    tagline: "AI financial assistant with chat agent and Plaid bank integration",
    description:
      "A personal finance app with a Claude-powered chat agent that connects to your bank accounts via Plaid, automatically categorizes transactions, and provides spending insights through natural conversation.",
    problem: "People struggle to understand their spending habits. Traditional finance apps show data but don't provide actionable insights through natural interaction.",
    approach: "Built an AI chat agent that connects to real bank data via Plaid and uses Claude to categorize transactions and answer financial questions conversationally.",
    build: "Integrated Plaid Link for bank account OAuth, built the transaction sync pipeline, designed the AI categorization engine, and created the Claude chat agent with financial context injection.",
    result: "Finance assistant connecting to real bank accounts via Plaid, with AI-powered transaction categorization and conversational spending insights.",
    tech: ["Next.js", "TypeScript", "Claude API", "Plaid API", "Supabase", "Stripe"],
    aiLevel: "core",
    aiDetail: "Claude chat agent + AI transaction categorization with Plaid bank integration",
    demoVideo: "/demos/spendsense.webm",
    featured: true,
  },
  {
    id: "mc",
    name: "MC (Mission Control)",
    tagline: "AI agent orchestration platform for complex multi-step workflows",
    description:
      "A platform that orchestrates Claude AI agents to handle complex, multi-step tasks autonomously. Manages agent lifecycles, context, and tool access for reliable AI-powered automation.",
    problem: "Complex workflows require multiple AI agents working in coordination, but there's no clean way to orchestrate them reliably.",
    approach: "Built an orchestration layer that manages agent spawning, context sharing, and tool execution with proper error handling and retry logic.",
    build: "Designed the architecture for agent coordination, context management, and tool routing. Built the orchestration engine, communication protocols, and lifecycle management from scratch.",
    result: "Orchestrates multi-agent workflows with reliable execution, retry logic, and real-time observability across concurrent agent sessions.",
    tech: ["TypeScript", "Node.js", "Claude API", "React"],
    aiLevel: "core",
    aiDetail: "Core Claude agent orchestration — agents are the product itself",
    demoVideo: "/demos/mc.webm",
  },
  {
    id: "ps-score",
    name: "PS-Score",
    tagline: "Fantasy esports scoring app — 9 months in production, 500+ WAU",
    description:
      "A mobile app for fantasy esports scoring with real-time match data, AI-generated commentary, and competitive leagues. Live on both App Store and Play Store for 9 months with 500+ weekly active users.",
    problem: "Fantasy esports fans lacked a dedicated scoring platform with real-time updates and engaging AI commentary.",
    approach: "Built a cross-platform mobile app with real-time data pipelines and Claude-powered match commentary to keep users engaged.",
    build: "Architected the full-stack system: React Native frontend, real-time WebSocket scoring backend, Supabase data layer, and AI commentary pipeline. Managed the full App Store and Play Store release lifecycle.",
    result: "500+ weekly active users across iOS and Android. 9 months in continuous production with regular feature releases and zero critical downtime.",
    tech: ["React Native", "TypeScript", "Supabase", "Claude API", "Expo"],
    aiLevel: "auxiliary",
    aiDetail: "Claude generates match commentary and player analysis",
    liveUrl: "#",
    liveLabel: "App Store + Play Store",
  },
  {
    id: "barberbook",
    name: "Barberbook (Kattoc)",
    tagline: "Full-stack barbershop booking platform — live in production",
    description:
      "A complete booking platform for barbershops with appointment scheduling, customer management, and payment processing. Live at kattoc.com serving real businesses.",
    problem: "Small barbershops need an affordable, easy-to-use booking system without the complexity of enterprise solutions.",
    approach: "Built a streamlined booking platform focused on the core workflow: discover, book, pay. No bloat, just what shops need.",
    build: "Full-stack implementation: Supabase schema design, scheduling engine with conflict detection, Stripe payment integration, email/SMS notifications, and a business dashboard for shop owners.",
    result: "Live production platform at kattoc.com actively serving barbershops — handling real bookings and payments daily.",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    aiLevel: "none",
    aiDetail: "Full-stack build without AI features — pure engineering",
    demoVideo: "/demos/kattoc.webm",
    liveUrl: "https://kattoc.com",
  },
  {
    id: "boba",
    name: "Boba",
    tagline: "AI-powered education platform using multiple AI models — live at joinboba.com",
    description:
      "An education platform that combines Claude and Gemini to create personalized learning experiences. Uses multi-AI architecture for different aspects of the learning pipeline.",
    problem: "One-size-fits-all education doesn't work. Students need personalized content and feedback at scale.",
    approach: "Built a multi-AI system where Claude handles content generation and feedback while Gemini processes different learning modalities, creating a comprehensive learning experience.",
    build: "Architected the multi-AI pipeline: Claude for content generation and grading, Gemini for multimodal processing. Built the LMS, student dashboard, and educator tools from scratch.",
    result: "Live platform at joinboba.com delivering personalized learning experiences with multi-AI content generation and adaptive feedback.",
    tech: ["Next.js", "TypeScript", "Claude API", "Gemini API", "Supabase"],
    aiLevel: "core",
    aiDetail: "Multi-AI architecture: Claude + Gemini for personalized learning",
    demoVideo: "/demos/edustart.webm",
    liveUrl: "https://joinboba.com",
  },
];
