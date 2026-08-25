import { CATEGORIES, type Category } from "./types";

const ALIASES: Record<string, Category> = {
  software: "Software",
  saas: "Software",
  subscriptions: "Software",
  subscription: "Software",
  cloud: "Infrastructure",
  hosting: "Infrastructure",
  infrastructure: "Infrastructure",
  internet: "Infrastructure",
  payroll: "Payroll",
  wages: "Payroll",
  salary: "Payroll",
  contractor: "Payroll",
  contractors: "Payroll",
  travel: "Travel",
  airfare: "Travel",
  airline: "Travel",
  lodging: "Travel",
  hotel: "Travel",
  meals: "Meals",
  restaurants: "Meals",
  dining: "Meals",
  food: "Meals",
  office: "Office",
  rent: "Office",
  utilities: "Office",
  equipment: "Office",
  marketing: "Marketing",
  advertising: "Marketing",
  ads: "Marketing",
  legal: "Professional Services",
  accounting: "Professional Services",
  professional: "Professional Services",
  consulting: "Professional Services",
  insurance: "Insurance",
  "bank fee": "Banking",
  "bank fees": "Banking",
  fees: "Banking",
  banking: "Banking",
  interest: "Banking",
  transfer: "Transfer",
  transfers: "Transfer",
  income: "Revenue",
  revenue: "Revenue",
  sales: "Revenue",
  payment: "Revenue",
  invoice: "Revenue",
  other: "Other",
};

const MERCHANT_RULES: { test: RegExp; category: Category }[] = [
  { test: /\baws\b|amazon web services/i, category: "Infrastructure" },
  { test: /google cloud|gcp|cloudflare|vercel|netlify|digitalocean|heroku|datadog|sentry/i, category: "Infrastructure" },
  { test: /google workspace|g suite|github|figma|notion|linear|slack|zoom|dropbox|atlassian|jira|openai|anthropic|cursor|adobe/i, category: "Software" },
  { test: /microsoft|msft|apple\.com|1password|lastpass|todoist/i, category: "Software" },
  { test: /gusto|rippling|deel|adp payroll|justworks/i, category: "Payroll" },
  { test: /uber|lyft|delta|united airlines|american airlines|jetblue|airbnb|hilton|marriott/i, category: "Travel" },
  { test: /starbucks|sweetgreen|doordash|uber eats|grubhub/i, category: "Meals" },
  { test: /wework|regus|usps|fedex|ups|staples|ikea/i, category: "Office" },
  { test: /meta ads|facebook ads|google ads|linkedin ads|mailchimp|hubspot/i, category: "Marketing" },
  { test: /stripe|mercury|plaid|brex|ramp/i, category: "Banking" },
  { test: /mercury.*transfer|internal transfer|transfer to|transfer from/i, category: "Transfer" },
];

function titleCategory(raw: string): Category | null {
  const key = raw.trim().toLowerCase();
  if (!key) return null;
  if ((CATEGORIES as readonly string[]).includes(raw.trim())) return raw.trim() as Category;
  if (ALIASES[key]) return ALIASES[key];
  for (const [alias, cat] of Object.entries(ALIASES)) {
    if (key.includes(alias)) return cat;
  }
  return null;
}

export function categorizeTransaction(input: {
  description: string;
  bankDescription: string;
  amount: number;
  mercuryCategory: string;
}): Category {
  const fromMercury = titleCategory(input.mercuryCategory);
  if (fromMercury) return fromMercury;

  const haystack = `${input.description} ${input.bankDescription}`;
  for (const rule of MERCHANT_RULES) {
    if (rule.test.test(haystack)) return rule.category;
  }

  if (input.amount > 0) return "Revenue";
  return "Other";
}

export function isTransfer(category: string) {
  return category === "Transfer";
}

export function isExpense(amount: number, category: string) {
  return amount < 0 && !isTransfer(category);
}

export function isIncome(amount: number, category: string) {
  return amount > 0 && !isTransfer(category);
}
