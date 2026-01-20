# PrepMate – Frontend Interview Prep App (Next.js App Router)

PrepMate is a simple and responsive frontend interview preparation app built with **Next.js 15/16 (App Router)** and **Tailwind CSS**.  
It allows users to practice interview questions (React/JavaScript/CSS), view question details, and track learning progress (Strong/Weak) using local storage.

---

## 🚀 Live Demo

Deployed on Vercel (Add your link here)

---

## ✅ Features Implemented

### ✅ Landing Page (Public)

- Modern landing page UI with **7 sections** (Navbar + Footer excluded)
- Navigation links to Login and Questions page
- Fully responsive layout

### ✅ Authentication (Mock)

- Hardcoded email/password login
- Stores login status in cookies (`auth=true`)
- Redirects to Questions list page after login
- Dashboard is protected (client-side protection)

### ✅ Questions List Page (Public)

- Displays questions list from internal JSON data through API
- Each card shows category, difficulty and short summary
- View details button for each question

### ✅ Question Details Page (Public)

- Shows full details of a single question
- Mark question as:
  - **Strong ✅**
  - **Weak ⚠️**
- Shows **More from same category (up to 20 questions)**

### ✅ Dashboard Page (Protected)

- Shows total progress:
  - Total questions
  - Completed questions
  - Strong count
  - Weak count
- Displays a progress bar
- Shows a list of Weak questions (quick access)

---

## 🧾 Demo Login Credentials

Use the following credentials to login:

- **Email:** `sadia@gmail.com`
- **Password:** `123456`

---

## 🛠️ Technologies Used

- Next.js 15/16 (App Router)
- React.js
- Tailwind CSS
- Cookie-based mock authentication
- Local Storage (Progress tracking)
- JSON-based data (question list)

---

## 📌 Routes Summary

| Route             | Type      | Description                  |
| ----------------- | --------- | ---------------------------- |
| `/`               | Public    | Landing page (7 sections)    |
| `/login`          | Public    | Mock login page              |
| `/questions`      | Public    | Question list page           |
| `/questions/[id]` | Public    | Single question details page |
| `/dashboard`      | Protected | User progress dashboard      |

---

## ⚙️ Setup & Installation

1. Clone the repository

```bash
git clone <your-repo-url>
```
