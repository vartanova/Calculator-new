# Calculator

This is the React + TypeScript App

## Getting Started

First, run the development server:
vv

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:5173 with your browser to see the result.

---

## Modular architecture

```
calculator-app/
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    │
    ├── types/
    │   └── index.ts
    │
    │
    │
    ├── utils/                        # Business logic
    │   ├── parser.ts
    │   │                             #   — accepts "," and "." (Task 2)
    │   │
    │   │
    │   ├── operations.ts
    │   │                             # — +, -, *, / (Tasks 1–5)
    │   │                             #   — pow (Task 7)
    │   │                             #   — max, min, hypot, atan2, log_base (Task 8)
    │   │
    │   ├── mathFunctions.ts          # applyUnaryOp(), unaryLabel()
    │   │                             #   — Round, Trunc, Int, Frac, Abs,
    │   │                             #     Sqr, Sqrt, Exp, Ln, sin, cos, tg,
    │   │                             #     arctan, Pi (Task 6)
    │   │                             #   — log10, log2, arcsin, arccos,
    │   │                             #     ceil, floor, sign (Task 8)
    │   │
    │   └── specialFunctions.ts       # calcFx(), calcF2()
    │                                 #   — F(x) = (x²+1)/(x-1) (Task 9)
    │                                 #   — F₂(x): 0→1, 1→10, 2→50 (Task 10)
    │
    ├── hooks/
    │   ├── useHistory.ts             # Storing history in localStorage
    │   │
    │   │
    │   └── useCalculator.ts
    │
    │
    │                                 #   — try/catch around all operations (Task 4)
    │
    │
    └── components/
        └── Calculator/
            ├── index.tsx
            │
            │
            ├── InputRow.tsx
            ├── ResultDisplay.tsx
            ├── ButtonGrid.tsx
            └── HistoryPanel.tsx
```

## Deploy on Vercel

The easiest way to deploy your app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
