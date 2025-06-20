# 📝 Taskify

A simple task management app implemented in two versions:

* **HTML/CSS version** – for basic frontend implementation.
* **React + TypeScript + Vite version** – for a scalable modern SPA setup.

---

## 🌐 Live Figma Design

[🔗 Figma Link](https://www.figma.com/design/bHAeJU7u9dCuDDhY8H0V2Y/Untitled?node-id=0-1&t=zWdzjA3DKHBb5EdN-1)

---

## 📁 Project Structure

### 📦 HTML\_implementation/

```
HTML_implementation/
├── index.html
├── login.html
├── register.html
├── notes.html
├── profile.html
├── style/
│   ├── main.css
│   ├── login.css
│   ├── register.css
│   ├── dashboard.css
│   └── responsive.css
└── assets/
    ├── logo.png
    ├── favicon.ico
    └── icons/
```

---

### ⚛️ React + Vite + TypeScript Version

```
taskify/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   └── icons/
│   ├── components/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Notes.tsx
│   │   ├── Profile.tsx
│   │   └── Dashboard.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── NotesPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── DashboardPage.tsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── login.css
│   │   ├── register.css
│   │   ├── dashboard.css
│   │   └── responsive.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tsconfig.json
├── package.json
├── vite.config.ts
├── .gitignore
└── eslint.config.js
```

---

## 🚀 Getting Started (React Version)

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/taskify.git
   cd taskify
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

---

## 📆 ESLint Plugins (Recommended)

To enhance React-specific linting:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## ✅ Contribution Guidelines

### Rules

* 💠 Work on issues **only if assigned to you**
* 🔒 Don't work on issues labeled `blocked`
* 🎯 Submit PRs that **close a specific issue** (only one per PR)
* 💬 Mention the issue number using:

  ```
  Closes #issue_number
  ```

### Issue Labels

| Label              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `good first issue` | Beginner-friendly task                         |
| `blocked`          | Dependent on another issue                     |
| `in progress`      | Someone is already working on it               |
| `ready`            | Available to be picked                         |
| `needs review`     | Awaiting maintainer review after PR submission |

---

## 🤝 Example Issue Dependencies

| Issue | Description                            | Depends On         |
| ----- | -------------------------------------- | ------------------ |
| #2    | Style the login form                   | #1 (Login layout)  |
| #4    | Add responsive CSS for register page   | #3 (Register HTML) |
| #6    | Task board columns (To Do/In Progress) | #5 (Dashboard)     |

---

## 👨‍💼 Maintained by: Community Contributors ( ONLY MEMBERS of the DEVLABS 2025 REACT Team 1
---
