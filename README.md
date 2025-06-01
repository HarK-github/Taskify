# Taskify App

# FILE STRUCTURE
Stricly Adhere to the order

```pgsql
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

## 📋 Rules for Issues & Contributions

We use an **issue-based development flow**. Some issues are dependent on others and must be completed in sequence.

### 📌 General Rules

1. **Only claim one issue at a time.** This helps avoid conflicts and encourages quality over quantity.
2. **Check dependencies before working on an issue.**
3. **Mention the issue you’re working on** in your Pull Request title and description.
4. If an issue is marked `blocked`, wait for the dependent issue to be closed before starting work.
5. Use this format in your PR description:

---

### 🔗 Example Dependencies

| Issue | Description | Depends On |
|-------|-------------|------------|
| #2    | Style the login form | #1 (Login HTML layout) |
| #4    | Add responsive CSS for register page | #3 (Register HTML structure) |
| #6    | Create task board columns (To Do, In Progress, Done) | #5 (Basic dashboard layout) |

 
---

### 🏷️ Issue Labels

| Label         | Meaning                                |
|---------------|----------------------------------------|
| `good first issue` | Beginner-friendly task             |
| `blocked`     | Cannot be worked on until prerequisite is done |
| `in progress` | Someone is already working on it        |
| `ready`       | Open for contribution                   |
| `needs review`| Pull Request submitted                  |

---




---
