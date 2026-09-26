<div align="center">

# 🏋️ FitLog — Workout Library

**A dark, no-nonsense gym companion.**
Pick a lift, lock it into today's plan, and watch the week's work add up.

[![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5-1AD1A5?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://fitlog-kowshik-three.vercel.app/)

🔗 **[Live Demo](https://fitlog-kowshik-three.vercel.app/)** · 💻 **[GitHub Repo](https://github.com/Kowshikkantidasbd/FITLOG)**

</div>

---

## 🌐 Live Link

👉 **[https://fitlog-kowshik-three.vercel.app/](https://fitlog-kowshik-three.vercel.app/)**

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Technologies Used](#️-technologies-used)
- [Key Features](#-key-features)
- [Pages](#-pages)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Credits](#-credits)

---

## 📖 About the Project

FitLog is a **workout library and daily training-log app**. It lets you browse a collection of gym exercises, open any lift to see its full spec sheet (equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions), and build out your own training session from there.

Add a lift to **Today's Plan** or **Save it for later**, then head to the My Plan dashboard to see live totals for exercises, minutes, and calories, mark lifts as done, or remove them — all wrapped in a bold, dark, gym-inspired UI. In short: it's a lightweight tool for planning and tracking a day's workout, from picking the lifts to logging them as complete.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js (App Router)** | Framework, routing, and page navigation |
| **TypeScript** | Type-safe components and data models |
| **Tailwind CSS** | Utility-first styling and responsive layout |
| **daisyUI** | Themed UI components on top of Tailwind |
| **lucide-react** | Icon set used across the app |
| **react-hot-toast** | Toast notifications for user actions |
| **React Context API** | Global state for the plan/saved lists |

---

## ✨ Key Features

1. **Responsive Workout Library** — All workouts pulled live from the FitLog API and displayed in a responsive grid (3 columns on desktop, collapsing gracefully on tablet and mobile), with a loading state while data fetches.
2. **Sort By Duration, Calories, or Rating** — A dropdown re-sorts the library instantly, defaulting to Duration.
3. **Detailed Workout Pages** — Each workout has its own page with a full spec panel (equipment, difficulty, sets, reps, duration, calories, rating) and numbered step-by-step instructions.
4. **Plan & Save Actions with Live Feedback** — "Add to Today's Plan" (capped at 5 lifts) and "Save for Later" update the navbar badge counters in real time and trigger toast notifications.
5. **My Plan Dashboard** — A dedicated `/my-plan` page with live Exercises / Minutes / Calories stat cards, tabbed Today's Plan vs. Saved views, and per-card actions: View Details, Mark as Done, and Remove.
6. **Toast Notifications Everywhere** — Every meaningful action (add, save, remove, mark done, plan full) gives instant feedback via `react-hot-toast`.
7. **Custom 404 Page** — Unknown or invalid routes are caught and shown a friendly not-found page instead of crashing.
8. **Fully Responsive Design** — Navbar, hero, library grid, and plan page all adapt cleanly across mobile, tablet, and desktop breakpoints.

---

## 📄 Pages

- **`/`** — Home page with hero banner and the full workout library grid.
- **`/workout/[id]`** — Individual workout detail page.
- **`/my-plan`** — Today's Plan & Saved workouts dashboard.
- **`*`** — Custom 404 page for any unmatched route.

---

## 🔌 API Reference

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/Kowshikkantidasbd/FITLOG.git
cd FITLOG
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

Build for production:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
fitlog/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page (hero + library)
│   │   ├── workout/[id]/page.tsx # Workout detail page
│   │   ├── my-plan/page.tsx      # My Plan dashboard
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── layout.tsx            # Root layout, fonts, providers
│   │   └── globals.css
│   ├── components/
│   │   └── Parts.tsx             # Navbar, Footer, WorkoutCard, etc.
│   ├── context/
│   │   └── PlanContext.tsx       # Global plan/saved state + actions
│   └── lib/
│       ├── api.ts                # API base URL + sorting helpers
│       └── types.ts              # Shared TypeScript types
└── public/                       # Logo, banner, and static assets
```

---

## 🙌 Credits

Design based on the FitLog Figma spec. Workout data served from a custom FitLog API.

---

<<<<<<< HEAD
© 2026 FitLog — Workout Library. Train hard, log honest.

