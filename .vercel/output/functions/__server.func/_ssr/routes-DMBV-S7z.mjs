import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as List, c as Ellipsis, d as ChevronDown, f as Calendar, i as Search, l as ChevronRight, n as Upload, o as LayoutDashboard, p as CalendarRange, s as FileSpreadsheet, t as X, u as ChevronLeft } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Root2, i as Portal2, n as Item2, o as Separator2, r as Label2, s as Trigger, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as ResponsiveContainer, i as Cell, n as XAxis, o as Tooltip, r as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DMBV-S7z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function TallyMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("text-fg", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.7",
			strokeLinecap: "square",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 4.5v15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 4.5v15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 4.5v15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 4.5v15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 16.5 L20 7.5" })
			]
		})
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 items-center justify-center rounded-md bg-primary text-primary-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TallyMark, { className: "size-5 text-primary-fg" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl leading-none font-medium tracking-tight",
			children: "Tally"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-surface-2 text-fg hover:bg-border",
			outline: "border border-border bg-surface text-fg hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			destructive: "bg-expense text-primary-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-[13px]",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-fg/40 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface p-5 text-fg shadow-[var(--shadow-soft)] focus:outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
var CATEGORIES = [
	"Revenue",
	"Payroll",
	"Software",
	"Infrastructure",
	"Office",
	"Travel",
	"Meals",
	"Marketing",
	"Professional Services",
	"Insurance",
	"Banking",
	"Transfer",
	"Other"
];
var IGNORED_STATUSES = /* @__PURE__ */ new Set([
	"failed",
	"cancelled",
	"canceled",
	"reversed",
	"blocked",
	"declined"
]);
var ALIASES = {
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
	other: "Other"
};
var MERCHANT_RULES = [
	{
		test: /\baws\b|amazon web services/i,
		category: "Infrastructure"
	},
	{
		test: /google cloud|gcp|cloudflare|vercel|netlify|digitalocean|heroku|datadog|sentry/i,
		category: "Infrastructure"
	},
	{
		test: /google workspace|g suite|github|figma|notion|linear|slack|zoom|dropbox|atlassian|jira|openai|anthropic|cursor|adobe/i,
		category: "Software"
	},
	{
		test: /microsoft|msft|apple\.com|1password|lastpass|todoist/i,
		category: "Software"
	},
	{
		test: /gusto|rippling|deel|adp payroll|justworks/i,
		category: "Payroll"
	},
	{
		test: /uber|lyft|delta|united airlines|american airlines|jetblue|airbnb|hilton|marriott/i,
		category: "Travel"
	},
	{
		test: /starbucks|sweetgreen|doordash|uber eats|grubhub/i,
		category: "Meals"
	},
	{
		test: /wework|regus|usps|fedex|ups|staples|ikea/i,
		category: "Office"
	},
	{
		test: /meta ads|facebook ads|google ads|linkedin ads|mailchimp|hubspot/i,
		category: "Marketing"
	},
	{
		test: /stripe|mercury|plaid|brex|ramp/i,
		category: "Banking"
	},
	{
		test: /mercury.*transfer|internal transfer|transfer to|transfer from/i,
		category: "Transfer"
	}
];
function titleCategory(raw) {
	const key = raw.trim().toLowerCase();
	if (!key) return null;
	if (CATEGORIES.includes(raw.trim())) return raw.trim();
	if (ALIASES[key]) return ALIASES[key];
	for (const [alias, cat] of Object.entries(ALIASES)) if (key.includes(alias)) return cat;
	return null;
}
function categorizeTransaction(input) {
	const fromMercury = titleCategory(input.mercuryCategory);
	if (fromMercury) return fromMercury;
	const haystack = `${input.description} ${input.bankDescription}`;
	for (const rule of MERCHANT_RULES) if (rule.test.test(haystack)) return rule.category;
	if (input.amount > 0) return "Revenue";
	return "Other";
}
function isTransfer(category) {
	return category === "Transfer";
}
function isExpense(amount, category) {
	return amount < 0 && !isTransfer(category);
}
function isIncome(amount, category) {
	return amount > 0 && !isTransfer(category);
}
function csvEscapeNeeds(value) {
	return /[",\n\r]/.test(value);
}
function csvEscape(value) {
	if (!csvEscapeNeeds(value)) return value;
	return `"${value.replaceAll("\"", "\"\"")}"`;
}
function parseDelimited(text, delimiter) {
	const input = text.replace(/^\uFEFF/, "");
	const rows = [];
	let row = [];
	let cell = "";
	let i = 0;
	let inQuotes = false;
	while (i < input.length) {
		const c = input[i];
		if (inQuotes) {
			if (c === "\"") {
				if (input[i + 1] === "\"") {
					cell += "\"";
					i += 2;
					continue;
				}
				inQuotes = false;
				i += 1;
				continue;
			}
			cell += c;
			i += 1;
			continue;
		}
		if (c === "\"") {
			inQuotes = true;
			i += 1;
			continue;
		}
		if (c === delimiter) {
			row.push(cell);
			cell = "";
			i += 1;
			continue;
		}
		if (c === "\n" || c === "\r") {
			if (c === "\r" && input[i + 1] === "\n") i += 1;
			row.push(cell);
			cell = "";
			if (row.some((x) => x.trim() !== "")) rows.push(row);
			row = [];
			i += 1;
			continue;
		}
		cell += c;
		i += 1;
	}
	row.push(cell);
	if (row.some((x) => x.trim() !== "")) rows.push(row);
	return rows;
}
function parseGrid(text) {
	const comma = parseDelimited(text, ",");
	const commaCols = comma[0]?.length ?? 0;
	if (commaCols >= 3) return comma;
	const tab = parseDelimited(text, "	");
	if ((tab[0]?.length ?? 0) > commaCols) return tab;
	const semi = parseDelimited(text, ";");
	if ((semi[0]?.length ?? 0) > commaCols) return semi;
	return comma;
}
function normHeader(h) {
	return h.trim().toLowerCase().replace(/\s+/g, " ");
}
function findCol(headers, exact, includes = []) {
	const n = headers.map(normHeader);
	for (const key of exact) {
		const i = n.indexOf(key);
		if (i >= 0) return i;
	}
	for (const key of includes) {
		const i = n.findIndex((h) => h.includes(key));
		if (i >= 0) return i;
	}
	return -1;
}
function cell(row, index) {
	if (index < 0) return "";
	return (row[index] ?? "").trim();
}
function parseAmount(raw) {
	const t = raw.trim();
	if (!t) return null;
	const parenNeg = /^\(.*\)$/.test(t);
	const cleaned = t.replace(/[$,\s]/g, "").replace(/[()]/g, "");
	if (!cleaned || cleaned === "-" || cleaned === "+") return null;
	const n = Number(cleaned);
	if (!Number.isFinite(n)) return null;
	return parenNeg ? -Math.abs(n) : n;
}
function parseDate(raw) {
	const t = raw.trim();
	if (!t) return null;
	const iso = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
	if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
	const us = t.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
	if (us) {
		const mm = us[1].padStart(2, "0");
		const dd = us[2].padStart(2, "0");
		const yyyy = us[3];
		const month = Number(mm);
		const day = Number(dd);
		if (month < 1 || month > 12 || day < 1 || day > 31) return null;
		return `${yyyy}-${mm}-${dd}`;
	}
	const ts = Date.parse(t);
	if (!Number.isNaN(ts)) {
		const d = new Date(ts);
		return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
	}
	return null;
}
function detectFormat(headers) {
	const joined = headers.map(normHeader).join(" | ");
	if (joined.includes("bank description") || joined.includes("source account") || joined.includes("date (utc)") || joined.includes("name on card")) return "mercury";
	if (joined.includes("transaction type") && joined.includes("name") && joined.includes("memo")) return "quickbooks";
	return "generic";
}
function fingerprint(parts) {
	return parts.map((p) => p.trim().toLowerCase()).join("|").replace(/\s+/g, " ");
}
function parseBankCsv(text, source = "import") {
	const errors = [];
	const grid = parseGrid(text);
	if (grid.length < 2) return {
		transactions: [],
		skipped: 0,
		errors: ["No data rows found. Export a CSV from Mercury Transactions."],
		format: "generic",
		headers: grid[0] ?? []
	};
	const headers = grid[0];
	const format = detectFormat(headers);
	const dateCol = findCol(headers, [
		"date (utc)",
		"date",
		"transaction date",
		"posted date",
		"posting date"
	], ["date"]);
	const tsCol = findCol(headers, [
		"timestamp",
		"posted at",
		"created at"
	]);
	const descCol = findCol(headers, [
		"description",
		"name",
		"payee",
		"memo"
	], ["description"]);
	const bankDescCol = findCol(headers, ["bank description"]);
	const amountCol = findCol(headers, [
		"amount",
		"amount (usd)",
		"total"
	], ["amount"]);
	const debitCol = findCol(headers, ["debit", "withdrawal"]);
	const creditCol = findCol(headers, ["credit", "deposit"]);
	const statusCol = findCol(headers, ["status"]);
	const accountCol = findCol(headers, [
		"source account",
		"account",
		"account name"
	]);
	const refCol = findCol(headers, [
		"reference",
		"ref",
		"num",
		"transaction id"
	]);
	const noteCol = findCol(headers, [
		"note",
		"notes",
		"memo"
	]);
	const lastFourCol = findCol(headers, [
		"last four digits",
		"last 4",
		"card last 4"
	]);
	const nameCol = findCol(headers, ["name on card"]);
	const categoryCol = findCol(headers, ["category"]);
	const currencyCol = findCol(headers, ["original currency", "currency"]);
	if (dateCol < 0 && tsCol < 0) errors.push("Could not find a Date column.");
	if (amountCol < 0 && debitCol < 0 && creditCol < 0) errors.push("Could not find an Amount column.");
	if (descCol < 0 && bankDescCol < 0) errors.push("Could not find a Description column.");
	const transactions = [];
	let skipped = 0;
	const seen = /* @__PURE__ */ new Set();
	for (let r = 1; r < grid.length; r += 1) {
		const row = grid[r];
		const status = cell(row, statusCol);
		if (status && IGNORED_STATUSES.has(status.toLowerCase())) {
			skipped += 1;
			continue;
		}
		const date = parseDate(cell(row, dateCol)) ?? parseDate(cell(row, tsCol));
		if (!date) {
			skipped += 1;
			continue;
		}
		let amount = null;
		if (amountCol >= 0) amount = parseAmount(cell(row, amountCol));
		if (amount === null && (debitCol >= 0 || creditCol >= 0)) {
			const debit = parseAmount(cell(row, debitCol)) ?? 0;
			amount = (parseAmount(cell(row, creditCol)) ?? 0) - debit;
		}
		if (amount === null || amount === 0) {
			skipped += 1;
			continue;
		}
		const description = cell(row, descCol) || cell(row, bankDescCol) || "Untitled";
		const bankDescription = cell(row, bankDescCol);
		const account = cell(row, accountCol);
		const reference = cell(row, refCol);
		const note = cell(row, noteCol);
		const lastFour = cell(row, lastFourCol);
		const nameOnCard = cell(row, nameCol);
		const currency = cell(row, currencyCol) || "USD";
		const rawCategory = cell(row, categoryCol);
		const idBase = fingerprint([
			date,
			amount.toFixed(2),
			description,
			reference,
			account,
			bankDescription
		]);
		let id = idBase;
		let n = 2;
		while (seen.has(id)) {
			id = `${idBase}#${n}`;
			n += 1;
		}
		seen.add(id);
		const category = categorizeTransaction({
			description,
			bankDescription,
			amount,
			mercuryCategory: rawCategory
		});
		transactions.push({
			id,
			date,
			description,
			amount,
			status: status || (amount < 0 ? "Sent" : "Received"),
			account,
			bankDescription,
			reference,
			note,
			lastFour,
			nameOnCard,
			category,
			currency,
			source
		});
	}
	if (transactions.length === 0 && errors.length === 0) errors.push("No usable transactions in this file.");
	transactions.sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0);
	return {
		transactions,
		skipped,
		errors,
		format,
		headers
	};
}
var HEADER = "Date (UTC),Description,Amount,Status,Source Account,Bank Description,Reference,Note,Last Four Digits,Name On Card,Category,GL Code,Timestamp,Original Currency";
function pad(n) {
	return String(n).padStart(2, "0");
}
function row(d, index) {
	const date = `${pad(d.month)}-${pad(d.day)}-${d.year}`;
	const status = d.amount < 0 ? "Sent" : "Received";
	const credit = d.account === "credit";
	const account = credit ? "Mercury Credit ••8841" : "Mercury Checking ••2291";
	const bank = d.bank ?? d.description.toUpperCase();
	const lastFour = credit ? "8841" : "";
	const nameOnCard = credit ? "A. Chen" : "";
	const ts = `${d.year}-${pad(d.month)}-${pad(d.day)}T15:04:00Z`;
	const cents = Math.abs(Math.round(d.amount * 100));
	const ref = `mrc_${d.year}${pad(d.month)}${pad(d.day)}_${index}_${cents}`;
	return [
		date,
		d.description,
		d.amount.toFixed(2),
		status,
		account,
		bank,
		ref,
		"",
		lastFour,
		nameOnCard,
		d.category,
		"",
		ts,
		"USD"
	].map(csvEscape).join(",");
}
function jitter(base, month, year, spread) {
	const wave = (month * 13 + (year - 2025) * 7) % 10 / 10;
	return Math.round((base * (1 + (wave - .4) * spread) + Number.EPSILON) * 100) / 100;
}
function drafts() {
	const out = [];
	for (let year = 2025; year <= 2026; year += 1) {
		const lastMonth = year === 2026 ? 8 : 12;
		for (let month = 1; month <= lastMonth; month += 1) {
			const helios = jitter(9200, month, year, .35);
			const paloma = jitter(6100, month, year, .28);
			const payroll = -(year === 2026 && month >= 4 ? 8100 : 7400);
			const aws = -jitter(512, month, year, .45);
			out.push({
				year,
				month,
				day: 2,
				description: "Helios Media",
				amount: helios,
				category: "Revenue",
				bank: "ACH CREDIT HELIOS MEDIA"
			}, {
				year,
				month,
				day: 5,
				description: "Paloma Co",
				amount: paloma,
				category: "Revenue",
				bank: "ACH CREDIT PALOMA CO"
			}, {
				year,
				month,
				day: 6,
				description: "Gusto Payroll",
				amount: payroll,
				category: "Payroll",
				bank: "GUSTO PAY"
			}, {
				year,
				month,
				day: 7,
				description: "Amazon Web Services",
				amount: aws,
				category: "Infrastructure",
				bank: "AWS"
			}, {
				year,
				month,
				day: 8,
				description: "Google Workspace",
				amount: -72,
				category: "Software",
				bank: "GOOGLE *WORKSPACE"
			}, {
				year,
				month,
				day: 9,
				description: "GitHub",
				amount: -44,
				category: "Software",
				bank: "GITHUB.COM"
			}, {
				year,
				month,
				day: 20,
				description: "Gusto Payroll",
				amount: payroll,
				category: "Payroll",
				bank: "GUSTO PAY"
			}, {
				year,
				month,
				day: 24,
				description: "Mercury",
				amount: -5,
				category: "Banking",
				bank: "MERCURY FEE"
			});
			if (month % 2 === 0) {
				out.push({
					year,
					month,
					day: 11,
					description: "Figma",
					amount: -15,
					category: "Software",
					bank: "FIGMA"
				});
				out.push({
					year,
					month,
					day: 12,
					description: "Vercel",
					amount: -20,
					category: "Infrastructure",
					bank: "VERCEL INC"
				});
			} else {
				out.push({
					year,
					month,
					day: 11,
					description: "Notion",
					amount: -16,
					category: "Software",
					bank: "NOTION LABS"
				});
				out.push({
					year,
					month,
					day: 13,
					description: "Cloudflare",
					amount: -25,
					category: "Infrastructure",
					bank: "CLOUDFLARE"
				});
			}
			if (month % 3 === 0) out.push({
				year,
				month,
				day: 16,
				description: "The Smith — Team dinner",
				amount: -186.4,
				category: "Meals",
				bank: "TST* THE SMITH",
				account: "credit"
			});
			if (month === 3 || month === 10) {
				out.push({
					year,
					month,
					day: 18,
					description: "Delta Air Lines",
					amount: -428.6,
					category: "Travel",
					bank: "DELTA AIR",
					account: "credit"
				});
				out.push({
					year,
					month,
					day: 19,
					description: "Marriott Hotels",
					amount: -312.18,
					category: "Travel",
					bank: "MARRIOTT",
					account: "credit"
				});
			}
		}
	}
	out.push({
		year: 2025,
		month: 1,
		day: 10,
		description: "WeWork",
		amount: -450,
		category: "Office",
		bank: "WEWORK"
	}, {
		year: 2025,
		month: 2,
		day: 14,
		description: "Apple",
		amount: -2499,
		category: "Office",
		bank: "APPLE.COM/BILL",
		account: "credit"
	}, {
		year: 2025,
		month: 4,
		day: 3,
		description: "Hiscox Insurance",
		amount: -1288,
		category: "Insurance",
		bank: "HISCOX INS"
	}, {
		year: 2025,
		month: 5,
		day: 21,
		description: "Mailchimp",
		amount: -65,
		category: "Marketing",
		bank: "MAILCHIMP"
	}, {
		year: 2025,
		month: 6,
		day: 8,
		description: "Config Conference",
		amount: -899,
		category: "Travel",
		bank: "FIGMA CONFIG",
		account: "credit"
	}, {
		year: 2025,
		month: 7,
		day: 15,
		description: "Ridge Legal",
		amount: -2400,
		category: "Professional Services",
		bank: "RIDGE LEGAL LLP"
	}, {
		year: 2025,
		month: 9,
		day: 2,
		description: "Hiscox Insurance",
		amount: -1288,
		category: "Insurance",
		bank: "HISCOX INS"
	}, {
		year: 2025,
		month: 11,
		day: 28,
		description: "Amazon",
		amount: -214.55,
		category: "Office",
		bank: "AMAZON.COM",
		account: "credit"
	}, {
		year: 2025,
		month: 12,
		day: 12,
		description: "Northline Studio — bonus",
		amount: -3600,
		category: "Payroll",
		bank: "GUSTO BONUS"
	}, {
		year: 2026,
		month: 1,
		day: 6,
		description: "Adobe",
		amount: -59.99,
		category: "Software",
		bank: "ADOBE"
	}, {
		year: 2026,
		month: 2,
		day: 17,
		description: "Linear",
		amount: -96,
		category: "Software",
		bank: "LINEAR APP"
	}, {
		year: 2026,
		month: 3,
		day: 4,
		description: "Hiscox Insurance",
		amount: -1340,
		category: "Insurance",
		bank: "HISCOX INS"
	}, {
		year: 2026,
		month: 4,
		day: 22,
		description: "Team offsite — Hudson",
		amount: -1860,
		category: "Travel",
		bank: "HUDSON HOUSE",
		account: "credit"
	}, {
		year: 2026,
		month: 5,
		day: 9,
		description: "Datadog",
		amount: -78,
		category: "Infrastructure",
		bank: "DATADOG"
	}, {
		year: 2026,
		month: 6,
		day: 18,
		description: "Ridge Legal",
		amount: -1200,
		category: "Professional Services",
		bank: "RIDGE LEGAL LLP"
	}, {
		year: 2026,
		month: 7,
		day: 7,
		description: "Apple",
		amount: -1999,
		category: "Office",
		bank: "APPLE.COM/BILL",
		account: "credit"
	}, {
		year: 2026,
		month: 8,
		day: 3,
		description: "Vercel",
		amount: -40,
		category: "Infrastructure",
		bank: "VERCEL INC"
	});
	return out;
}
function buildSampleCsv() {
	const lines = [HEADER];
	drafts().forEach((d, i) => lines.push(row(d, i)));
	return `${lines.join("\n")}\n`;
}
var cached = null;
function sampleTransactions() {
	if (!cached) cached = parseBankCsv(buildSampleCsv(), "sample").transactions;
	return cached;
}
function mergeTransactions(existing, incoming) {
	const map = new Map(existing.map((t) => [t.id, t]));
	let added = 0;
	let skipped = 0;
	for (const tx of incoming) {
		if (map.get(tx.id)) {
			skipped += 1;
			continue;
		}
		map.set(tx.id, tx);
		added += 1;
	}
	return {
		transactions: [...map.values()].sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0),
		added,
		skipped
	};
}
var useLedger = create()(persist((set, get) => ({
	transactions: sampleTransactions(),
	isSample: true,
	importMeta: null,
	importCsv: (text, filename, mode) => {
		const parsed = parseBankCsv(text, filename);
		const replace = mode === "replace" || get().isSample;
		const merged = replace ? {
			transactions: parsed.transactions,
			added: parsed.transactions.length,
			skipped: 0
		} : mergeTransactions(get().transactions, parsed.transactions);
		set({
			transactions: merged.transactions,
			isSample: false,
			importMeta: {
				filename,
				at: Date.now()
			}
		});
		return {
			filename,
			added: merged.added,
			skipped: merged.skipped + parsed.skipped,
			format: parsed.format,
			errors: parsed.errors,
			replaced: replace
		};
	},
	loadSample: () => set({
		transactions: sampleTransactions(),
		isSample: true,
		importMeta: null
	}),
	clearAll: () => set({
		transactions: [],
		isSample: false,
		importMeta: null
	}),
	setCategory: (id, category) => set({ transactions: get().transactions.map((t) => t.id === id ? {
		...t,
		category
	} : t) })
}), {
	name: "tally-mercury-v1",
	version: 1,
	skipHydration: true,
	partialize: (s) => ({
		transactions: s.transactions,
		isSample: s.isSample,
		importMeta: s.importMeta
	})
}));
function downloadSample$1() {
	const blob = new Blob([buildSampleCsv()], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "mercury-sample.csv";
	a.click();
	URL.revokeObjectURL(url);
}
function ImportDialog({ open, onOpenChange }) {
	const importCsv = useLedger((s) => s.importCsv);
	const isSample = useLedger((s) => s.isSample);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const handleFiles = (0, import_react.useCallback)(async (files) => {
		const file = files[0];
		if (!file) return;
		if (!/\.(csv|txt)$/i.test(file.name) && file.type && !file.type.includes("csv") && file.type !== "text/plain") {
			toast.error("Please drop a .csv file exported from Mercury.");
			return;
		}
		setBusy(true);
		try {
			const text = await file.text();
			const result = importCsv(text, file.name);
			if (result.added === 0 && result.errors.length) {
				toast.error(result.errors[0] ?? "Could not read that CSV.");
				return;
			}
			if (result.added === 0) toast.message("No new transactions", { description: result.skipped ? `${result.skipped} rows skipped or already imported.` : void 0 });
			else toast.success(result.replaced ? `Imported ${result.added} transactions` : `Added ${result.added} transactions`, { description: result.skipped ? `${result.skipped} skipped as duplicates or empty.` : `Detected ${result.format} format.` });
			onOpenChange(false);
		} catch {
			toast.error("Could not read that file.");
		} finally {
			setBusy(false);
		}
	}, [importCsv, onOpenChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Import Mercury CSV" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: isSample ? "This will replace the sample ledger with your export. Files stay in this browser." : "New rows merge with your ledger. Duplicates are skipped. Nothing is uploaded." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				disabled: busy,
				onClick: () => inputRef.current?.click(),
				onDragEnter: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handleFiles(e.dataTransfer.files);
				},
				className: cn("mt-4 flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-4 py-8 text-center transition-colors duration-150", dragging ? "border-fg bg-surface-2" : "border-border-strong bg-bg hover:bg-surface-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Drop a CSV here, or choose a file"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Mercury Transactions export, QuickBooks CSV, or Date / Description / Amount"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: ".csv,text/csv",
				className: "sr-only",
				onChange: (e) => {
					if (e.target.files) handleFiles(e.target.files);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 space-y-1.5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. In Mercury, open Transactions." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Choose Export all or Export filtered." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Download CSV and drop it above." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-2 sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: downloadSample$1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, {}), "Download sample CSV"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					onClick: () => inputRef.current?.click(),
					disabled: busy,
					children: "Choose file"
				})]
			})
		] })
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-surface text-fg shadow-[var(--shadow-soft)]", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 px-5 pt-5", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("font-display text-lg font-medium tracking-tight", className),
		...props
	});
}
function CardDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("px-5 pb-5 pt-4", className),
		...props
	});
}
var money = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD"
});
var moneyCompact = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	notation: "compact",
	maximumFractionDigits: 1
});
function formatMoney(n, opts) {
	const abs = Math.abs(n);
	const formatted = (opts?.compact ? moneyCompact : money).format(abs);
	if (opts?.sign) {
		if (n < 0) return `−${formatted}`;
		if (n > 0) return `+${formatted}`;
	}
	return formatted;
}
function formatMonth(ym, opts) {
	const [y, m] = ym.split("-").map(Number);
	if (!y || !m) return ym;
	return new Date(y, m - 1, 1).toLocaleString("en-US", {
		month: opts?.short ? "short" : "long",
		year: "numeric"
	});
}
function formatMonthShort(ym) {
	const [y, m] = ym.split("-").map(Number);
	if (!y || !m) return ym;
	return new Date(y, m - 1, 1).toLocaleString("en-US", { month: "short" });
}
function formatDay(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	if (!y || !m || !d) return iso;
	return new Date(y, m - 1, d).toLocaleString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function monthKey(isoDate) {
	return isoDate.slice(0, 7);
}
function yearKey(isoDate) {
	return Number(isoDate.slice(0, 4));
}
function shiftMonth(ym, delta) {
	const [y, m] = ym.split("-").map(Number);
	const date = new Date(y, m - 1 + delta, 1);
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	return `${date.getFullYear()}-${mm}`;
}
function pctChange(current, previous) {
	if (previous === 0) return null;
	return (current - previous) / Math.abs(previous);
}
function formatPct(n) {
	const pct = Math.abs(n) * 100;
	const body = pct >= 10 ? pct.toFixed(0) : pct.toFixed(1);
	if (n > 0) return `+${body}%`;
	if (n < 0) return `−${body}%`;
	return "0%";
}
function spentOf(txs) {
	return txs.reduce((sum, t) => isExpense(t.amount, t.category) ? sum + Math.abs(t.amount) : sum, 0);
}
function incomeOf(txs) {
	return txs.reduce((sum, t) => isIncome(t.amount, t.category) ? sum + t.amount : sum, 0);
}
function netOf(txs) {
	return incomeOf(txs) - spentOf(txs);
}
function dateRange(txs) {
	if (txs.length === 0) return null;
	let min = txs[0].date;
	let max = txs[0].date;
	for (const t of txs) {
		if (t.date < min) min = t.date;
		if (t.date > max) max = t.date;
	}
	return {
		min,
		max
	};
}
function latestMonth(txs) {
	const range = dateRange(txs);
	return range ? monthKey(range.max) : null;
}
function latestYear(txs) {
	const range = dateRange(txs);
	return range ? yearKey(range.max) : null;
}
function inMonth(txs, ym) {
	return txs.filter((t) => monthKey(t.date) === ym);
}
function inYear(txs, year) {
	return txs.filter((t) => yearKey(t.date) === year);
}
function monthlyBuckets(txs) {
	const map = /* @__PURE__ */ new Map();
	for (const t of txs) {
		if (isTransfer(t.category)) continue;
		const month = monthKey(t.date);
		let bucket = map.get(month);
		if (!bucket) {
			bucket = {
				month,
				spent: 0,
				income: 0,
				net: 0,
				count: 0
			};
			map.set(month, bucket);
		}
		bucket.count += 1;
		if (isExpense(t.amount, t.category)) bucket.spent += Math.abs(t.amount);
		if (isIncome(t.amount, t.category)) bucket.income += t.amount;
		bucket.net = bucket.income - bucket.spent;
	}
	return [...map.values()].sort((a, b) => a.month < b.month ? -1 : 1);
}
function fillMonthSpan(buckets, from, to) {
	const byMonth = new Map(buckets.map((b) => [b.month, b]));
	const out = [];
	let cursor = from;
	while (cursor <= to) {
		out.push(byMonth.get(cursor) ?? {
			month: cursor,
			spent: 0,
			income: 0,
			net: 0,
			count: 0
		});
		const next = shiftMonth(cursor, 1);
		if (next === cursor) break;
		cursor = next;
	}
	return out;
}
function lastNMonths(txs, n, endMonth) {
	const buckets = monthlyBuckets(txs);
	const end = endMonth ?? latestMonth(txs);
	if (!end) return [];
	return fillMonthSpan(buckets, shiftMonth(end, -(n - 1)), end);
}
function yearlyBuckets(txs) {
	const map = /* @__PURE__ */ new Map();
	for (const t of txs) {
		if (isTransfer(t.category)) continue;
		const year = yearKey(t.date);
		let bucket = map.get(year);
		if (!bucket) {
			bucket = {
				year,
				spent: 0,
				income: 0,
				net: 0,
				count: 0
			};
			map.set(year, bucket);
		}
		bucket.count += 1;
		if (isExpense(t.amount, t.category)) bucket.spent += Math.abs(t.amount);
		if (isIncome(t.amount, t.category)) bucket.income += t.amount;
		bucket.net = bucket.income - bucket.spent;
	}
	return [...map.values()].sort((a, b) => a.year - b.year);
}
function categoryTotals(txs, direction) {
	const map = /* @__PURE__ */ new Map();
	for (const t of txs) {
		if (isTransfer(t.category)) continue;
		if (direction === "spend" && !isExpense(t.amount, t.category)) continue;
		if (direction === "income" && !isIncome(t.amount, t.category)) continue;
		const amount = Math.abs(t.amount);
		const prev = map.get(t.category) ?? {
			total: 0,
			count: 0
		};
		prev.total += amount;
		prev.count += 1;
		map.set(t.category, prev);
	}
	const rows = [...map.entries()].map(([category, v]) => ({
		category,
		total: v.total,
		count: v.count,
		share: 0
	}));
	const sum = rows.reduce((s, r) => s + r.total, 0);
	for (const row of rows) row.share = sum === 0 ? 0 : row.total / sum;
	rows.sort((a, b) => b.total - a.total);
	return rows;
}
function merchantTotals(txs, direction, limit = 8) {
	const map = /* @__PURE__ */ new Map();
	for (const t of txs) {
		if (isTransfer(t.category)) continue;
		if (direction === "spend" && !isExpense(t.amount, t.category)) continue;
		if (direction === "income" && !isIncome(t.amount, t.category)) continue;
		const name = t.description.trim() || "Untitled";
		const prev = map.get(name) ?? {
			total: 0,
			count: 0
		};
		prev.total += Math.abs(t.amount);
		prev.count += 1;
		map.set(name, prev);
	}
	return [...map.entries()].map(([name, v]) => ({
		name,
		total: v.total,
		count: v.count
	})).sort((a, b) => b.total - a.total).slice(0, limit);
}
function availableMonths(txs) {
	return [...new Set(txs.map((t) => monthKey(t.date)))].sort();
}
function availableYears(txs) {
	return [...new Set(txs.map((t) => yearKey(t.date)))].sort((a, b) => a - b);
}
function CategoryList({ rows, empty = "No spending in this period." }) {
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: empty
	});
	const max = rows[0]?.total ?? 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-3",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: row.category
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-sm tabular-nums text-muted",
				children: formatMoney(row.total)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full bg-fg"),
				style: { width: `${Math.max(4, row.total / max * 100)}%` }
			})
		})] }, row.category))
	});
}
function Money({ value, signed = false, compact = false, tone = "default", className }) {
	const resolved = tone === "auto" ? value < 0 ? "expense" : value > 0 ? "income" : "default" : tone;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-mono tabular-nums tracking-tight", resolved === "expense" && "text-expense", resolved === "income" && "text-income", className),
		children: formatMoney(value, {
			sign: signed,
			compact
		})
	});
}
function ChartTooltip({ active, payload }) {
	if (!active || !payload?.[0]) return null;
	const row = payload[0].payload;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-surface px-3 py-2 text-xs shadow-[var(--shadow-soft)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-1 font-medium",
				children: [
					formatMonthShort(row.month),
					" ",
					row.month.slice(0, 4)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono tabular-nums",
				children: ["Spent ", formatMoney(row.spent)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono tabular-nums text-income",
				children: ["In ", formatMoney(row.income)]
			})
		]
	});
}
function MonthChart({ data, focusMonth, onSelect }) {
	const rows = data.map((d) => ({
		...d,
		label: formatMonthShort(d.month)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: rows,
				margin: {
					top: 8,
					right: 4,
					left: 4,
					bottom: 0
				},
				barCategoryGap: "22%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						tickLine: false,
						axisLine: false,
						tick: {
							fill: "var(--color-muted)",
							fontSize: 11,
							fontFamily: "IBM Plex Sans, sans-serif"
						},
						minTickGap: 16
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						cursor: { fill: "var(--color-surface-2)" },
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "spent",
						radius: [
							4,
							4,
							0,
							0
						],
						cursor: onSelect ? "pointer" : "default",
						children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
							fill: row.month === focusMonth ? "var(--color-fg)" : "var(--color-bar)",
							onClick: () => onSelect?.(row.month)
						}, row.month))
					})
				]
			})
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-surface-2 text-fg",
		muted: "bg-surface-2 text-muted",
		income: "bg-income/10 text-income",
		expense: "bg-expense/10 text-expense",
		outline: "border border-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-44 overflow-hidden rounded-lg border border-border bg-surface p-1 text-fg shadow-[var(--shadow-soft)]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, inset, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("relative flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm outline-none select-none focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-40", inset && "pl-8", className),
		...props
	});
}
function DropdownMenuLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		className: cn("px-2.5 py-1.5 text-xs font-medium text-muted", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function CategoryPicker({ tx }) {
	const setCategory = useLedger((s) => s.setCategory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "sm",
			className: "h-8 gap-1 px-2 text-muted",
			children: [tx.category, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "max-h-72 overflow-y-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Category" }), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
			onSelect: () => setCategory(tx.id, cat),
			children: cat
		}, cat))]
	})] });
}
function TransactionRow({ tx }) {
	const expense = tx.amount < 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 border-b border-border py-3 last:border-0 md:grid-cols-[6.5rem_1fr_auto_auto] md:gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "order-2 text-xs text-muted md:order-1 md:text-sm",
				children: formatDay(tx.date)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 min-w-0 md:order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: tx.description
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted",
					children: tx.account || tx.bankDescription || tx.status
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-4 hidden md:order-3 md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPicker, { tx })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-3 flex flex-col items-end md:order-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
					value: tx.amount,
					signed: true,
					tone: expense ? "expense" : "income",
					className: "text-sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "muted",
						children: tx.category
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-5 col-span-2 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPicker, { tx })
			})
		]
	});
}
function TransactionList({ txs, empty = "No transactions match these filters." }) {
	if (txs.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-8 text-center text-sm text-muted",
		children: empty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: txs.map((tx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionRow, { tx }, tx.id)) });
}
function MonthlyView({ transactions, month, onMonthChange }) {
	const months = availableMonths(transactions);
	const min = months[0];
	const max = months[months.length - 1] ?? latestMonth(transactions) ?? month;
	const txs = inMonth(transactions, month);
	const spent = spentOf(txs);
	const income = incomeOf(txs);
	const prevKey = shiftMonth(month, -1);
	const delta = pctChange(spent, spentOf(inMonth(transactions, prevKey)));
	const cats = categoryTotals(txs, "spend");
	const chart = lastNMonths(transactions, 12, max);
	const canPrev = min ? month > min : false;
	const canNext = max ? month < max : false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Monthly spending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight",
					children: formatMonth(month)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						disabled: !canPrev,
						onClick: () => onMonthChange(shiftMonth(month, -1)),
						"aria-label": "Previous month",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						disabled: !canNext,
						onClick: () => onMonthChange(shiftMonth(month, 1)),
						"aria-label": "Next month",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Spent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: spent,
									tone: "expense",
									className: "mt-2 block text-2xl font-medium"
								}),
								delta !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `mt-1 text-xs ${delta > 0 ? "text-expense" : "text-income"}`,
									children: [
										formatPct(delta),
										" vs ",
										formatMonth(prevKey, { short: true })
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: [txs.length, " transactions"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Income"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: income,
									tone: "income",
									className: "mt-2 block text-2xl font-medium"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Posted inflows"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Net"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: income - spent,
									tone: income - spent >= 0 ? "income" : "expense",
									className: "mt-2 block text-2xl font-medium"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Income minus spend"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Year context" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Select another month from the chart" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthChart, {
						data: chart,
						focusMonth: month,
						onSelect: onMonthChange
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Outflows this month" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryList, { rows: cats }) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Transactions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
				txs.length,
				" in ",
				formatMonth(month)
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, {
				txs,
				empty: "Nothing posted this month."
			}) })] })
		]
	});
}
function Kpi({ label, value, hint, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "rounded-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "px-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value,
						tone: tone ?? "default",
						className: "text-2xl font-medium"
					})
				}),
				hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: hint
				}) : null
			]
		})
	});
}
function Overview({ transactions, onOpenMonth }) {
	const month = latestMonth(transactions);
	const year = latestYear(transactions);
	const monthTxs = month ? inMonth(transactions, month) : [];
	const yearTxs = year ? inYear(transactions, year) : [];
	const spentMonth = spentOf(monthTxs);
	const incomeMonth = incomeOf(monthTxs);
	const spentYear = spentOf(yearTxs);
	const netYear = netOf(yearTxs);
	const chart = lastNMonths(transactions, 12, month ?? void 0);
	const cats = categoryTotals(monthTxs, "spend").slice(0, 6);
	const merchants = merchantTotals(monthTxs, "spend", 5);
	const recent = [...transactions].sort((a, b) => a.date < b.date ? 1 : -1).slice(0, 8);
	const range = dateRange(transactions);
	const prevMonth = chart.length >= 2 ? chart[chart.length - 2] : null;
	const delta = prevMonth ? pctChange(spentMonth, prevMonth.spent) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [range ? `${formatMonth(range.min.slice(0, 7), { short: true })} – ${formatMonth(range.max.slice(0, 7), { short: true })}` : "No activity", transactions.length ? ` · ${transactions.length} transactions` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: month ? formatMonth(month) : "Overview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: delta === null ? "Monthly and yearly spending from your Mercury export." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: delta > 0 ? "text-expense" : "text-income",
							children: formatPct(delta)
						}),
						" ",
						"vs the previous month"
					] })
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: month ? `${formatMonth(month, { short: true })} spent` : "Spent",
						value: spentMonth,
						tone: "expense"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Income",
						value: incomeMonth,
						tone: "income"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: year ? `${year} spent` : "Year spent",
						value: spentYear,
						tone: "expense"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: year ? `${year} net` : "Net",
						value: netYear,
						tone: netYear >= 0 ? "income" : "expense"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Spending by month" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Last 12 months in the file. Click a bar to open that month." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthChart, {
						data: chart,
						focusMonth: month ?? void 0,
						onSelect: onOpenMonth
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Where it went" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: month ? formatMonth(month) : "This period" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryList, { rows: cats }) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent activity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Newest first. Recategorize any row." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, {
						txs: recent,
						empty: "Import a Mercury CSV to see activity."
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top merchants" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Largest outflows this month" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: merchants.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No merchants yet."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-3",
						children: merchants.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: m.total,
								className: "text-sm text-muted"
							})]
						}, m.name))
					}) })]
				})]
			})
		]
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var PAGE = 40;
function TransactionsView({ transactions }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const [direction, setDirection] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(0);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return transactions.filter((t) => {
			if (category !== "all" && t.category !== category) return false;
			if (direction === "spend" && t.amount >= 0) return false;
			if (direction === "income" && t.amount <= 0) return false;
			if (!q) return true;
			return `${t.description} ${t.bankDescription} ${t.account} ${t.note} ${t.category}`.toLowerCase().includes(q);
		});
	}, [
		transactions,
		query,
		category,
		direction
	]);
	const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
	const safePage = Math.min(page, pages - 1);
	const slice = filtered.slice(safePage * PAGE, safePage * PAGE + PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Ledger"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl font-medium tracking-tight",
			children: "Transactions"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "All activity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
			filtered.length,
			" of ",
			transactions.length,
			" shown. Search and recategorize in place."
		] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 lg:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => {
								setQuery(e.target.value);
								setPage(0);
							},
							placeholder: "Search merchants, accounts, notes",
							className: "pl-9"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: direction,
							onChange: (e) => {
								setDirection(e.target.value);
								setPage(0);
							},
							className: "h-11 rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All types"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "spend",
									children: "Spending"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "income",
									children: "Income"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: category,
							onChange: (e) => {
								setCategory(e.target.value);
								setPage(0);
							},
							className: "h-11 rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All categories"
							}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionList, { txs: slice }),
				pages > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Page ",
							safePage + 1,
							" of ",
							pages
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							disabled: safePage === 0,
							onClick: () => setPage((p) => Math.max(0, p - 1)),
							children: "Previous"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							disabled: safePage >= pages - 1,
							onClick: () => setPage((p) => p + 1),
							children: "Next"
						})]
					})]
				}) : null
			]
		})] })]
	});
}
function YearlyView({ transactions, year, onYearChange, onOpenMonth }) {
	const years = availableYears(transactions);
	const min = years[0] ?? year;
	const max = years[years.length - 1] ?? year;
	const txs = inYear(transactions, year);
	const spent = spentOf(txs);
	const income = incomeOf(txs);
	const net = income - spent;
	const months = fillMonthSpan(monthlyBuckets(txs), `${year}-01`, `${year}-12`);
	const cats = categoryTotals(txs, "spend");
	const prev = yearlyBuckets(transactions).find((y) => y.year === year - 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Yearly spending"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-medium tracking-tight",
					children: year
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						disabled: year <= min,
						onClick: () => onYearChange(year - 1),
						"aria-label": "Previous year",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						disabled: year >= max,
						onClick: () => onYearChange(year + 1),
						"aria-label": "Next year",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Spent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: spent,
									tone: "expense",
									className: "mt-2 block text-2xl font-medium"
								}),
								prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: [
										formatMoney(prev.spent),
										" in ",
										prev.year
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: [txs.length, " transactions"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Income"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: income,
									tone: "income",
									className: "mt-2 block text-2xl font-medium"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: "Posted inflows"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wide text-muted uppercase",
									children: "Net"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: net,
									tone: net >= 0 ? "income" : "expense",
									className: "mt-2 block text-2xl font-medium"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: spent > 0 ? `Avg ${formatMoney(spent / Math.max(1, months.filter((m) => m.count > 0).length))} / mo spent` : "No outflows"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Each month" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Click a bar to inspect that month" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthChart, {
						data: months,
						onSelect: onOpenMonth
					}) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Categories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Full year outflows" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryList, { rows: cats }) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Month by month" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: ["Spend, income, and net for ", year] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "overflow-x-auto px-0 pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[28rem] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-left text-xs tracking-wide text-muted uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-2 font-medium",
								children: "Month"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-2 text-right font-medium",
								children: "Spent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-2 text-right font-medium",
								children: "Income"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-2 text-right font-medium",
								children: "Net"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: months.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "font-medium hover:underline",
									onClick: () => onOpenMonth(m.month),
									children: formatMonthShort(m.month)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-2.5 text-right font-mono tabular-nums text-expense",
								children: formatMoney(m.spent)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-2.5 text-right font-mono tabular-nums text-income",
								children: formatMoney(m.income)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: `px-5 py-2.5 text-right font-mono tabular-nums ${m.net >= 0 ? "text-income" : "text-expense"}`,
								children: formatMoney(m.net, { sign: true })
							})
						]
					}, m.month)) })]
				})
			})] })
		]
	});
}
var NAV = [
	{
		id: "overview",
		label: "Overview",
		icon: LayoutDashboard
	},
	{
		id: "transactions",
		label: "Activity",
		icon: List
	},
	{
		id: "monthly",
		label: "Monthly",
		icon: Calendar
	},
	{
		id: "yearly",
		label: "Yearly",
		icon: CalendarRange
	}
];
function downloadSample() {
	const blob = new Blob([buildSampleCsv()], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "mercury-sample.csv";
	a.click();
	URL.revokeObjectURL(url);
}
function AppShell() {
	const transactions = useLedger((s) => s.transactions);
	const isSample = useLedger((s) => s.isSample);
	const loadSample = useLedger((s) => s.loadSample);
	const clearAll = useLedger((s) => s.clearAll);
	const [view, setView] = (0, import_react.useState)("overview");
	const [importOpen, setImportOpen] = (0, import_react.useState)(false);
	const fallbackMonth = (0, import_react.useMemo)(() => latestMonth(transactions) ?? "2026-08", [transactions]);
	const fallbackYear = (0, import_react.useMemo)(() => latestYear(transactions) ?? 2026, [transactions]);
	const [month, setMonth] = (0, import_react.useState)(fallbackMonth);
	const [year, setYear] = (0, import_react.useState)(fallbackYear);
	(0, import_react.useEffect)(() => {
		useLedger.persist.rehydrate();
	}, []);
	const latestM = latestMonth(transactions);
	const latestY = latestYear(transactions);
	(0, import_react.useEffect)(() => {
		if (latestM) setMonth(latestM);
		if (latestY) setYear(latestY);
	}, [latestM, latestY]);
	const openMonth = (next) => {
		setMonth(next);
		setYear(Number(next.slice(0, 4)));
		setView("monthly");
	};
	const sampleAction = () => {
		loadSample();
		toast.success("Loaded sample Mercury activity");
	};
	const clearAction = () => {
		clearAll();
		toast.message("Ledger cleared");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-surface md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted",
							children: "Mercury spending, kept on this device."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-1 px-3",
						children: NAV.map((item) => {
							const Icon = item.icon;
							const active = view === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView(item.id),
								className: cn("flex h-11 items-center gap-2.5 rounded-md px-3 text-sm font-medium transition-colors duration-150", active ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							onClick: () => setImportOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "Import CSV"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverflowMenu, {
							isSample,
							hasData: transactions.length > 0,
							onSample: sampleAction,
							onClear: clearAction,
							align: "start",
							label: "Ledger options"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setImportOpen(true),
						children: "Import"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverflowMenu, {
						isSample,
						hasData: transactions.length > 0,
						onSample: sampleAction,
						onClear: clearAction
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "md:pl-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-4 pb-28 md:px-8 md:pt-8 md:pb-12",
					children: [isSample && transactions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 rounded-lg border border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Sample Mercury workspace. Import your CSV to replace it — files never leave this browser."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setImportOpen(true),
							children: "Import CSV"
						})]
					}) : null, transactions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyLedger, {
						onImport: () => setImportOpen(true),
						onSample: loadSample
					}) : view === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
						transactions,
						onOpenMonth: openMonth
					}) : view === "transactions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionsView, { transactions }) : view === "monthly" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthlyView, {
						transactions,
						month,
						onMonthChange: (m) => {
							setMonth(m);
							setYear(Number(m.slice(0, 4)));
						}
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearlyView, {
						transactions,
						year,
						onYearChange: setYear,
						onOpenMonth: openMonth
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = view === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-medium", active ? "text-fg" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportDialog, {
				open: importOpen,
				onOpenChange: setImportOpen
			})
		]
	});
}
function OverflowMenu({ isSample, hasData, onSample, onClear, align = "end", label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "w-full justify-start text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {}), label]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": "More",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: downloadSample,
				children: "Download sample CSV"
			}),
			!isSample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: onSample,
				children: "Load sample data"
			}) : null,
			hasData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null,
			hasData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				className: "text-expense",
				onSelect: onClear,
				children: "Clear ledger"
			}) : null
		]
	})] });
}
function EmptyLedger({ onImport, onSample }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-lg flex-col items-start gap-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-medium tracking-tight",
				children: "Start with a Mercury export"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Drop a CSV from Mercury Transactions to see monthly and yearly spending, categories, and a full ledger. Everything stays in this browser."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onImport,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "Import CSV"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: onSample,
					children: "Load sample data"
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
