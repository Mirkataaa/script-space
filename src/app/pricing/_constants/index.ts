import { Globe, Shield, RefreshCcw, Boxes } from "lucide-react";

export const ENTERPRISE_FEATURES = [
  {
    icon: Globe,
    label: "Global Edge Network",
    desc: "Run code at the speed of light — powered by a worldwide edge infrastructure.",
  },
  {
    icon: Shield,
    label: "Advanced Security",
    desc: "Your data is protected with zero-trust architecture and enterprise-grade encryption.",
  },
  {
    icon: RefreshCcw,
    label: "Live Collaboration",
    desc: "Work together in real time with automatic syncing and version resilience.",
  },
  {
    icon: Boxes,
    label: "Scalable Storage",
    desc: "Effortlessly store and access unlimited snippets, assets, and projects.",
  },
];

export const FEATURES = {
  development: [
    "AI-assisted code generation",
    "Customizable UI themes",
    "Built-in performance profiler",
    "Multi-language project support",
  ],
  collaboration: [
    "Real-time coding sessions",
    "Shared team dashboards",
    "Git and branch management",
    "In-app code reviews & comments",
  ],
  deployment: [
    "Instant cloud deployment",
    "CI/CD pipeline automation",
    "Docker & Kubernetes support",
    "Custom domain and SSL setup",
  ],
};
