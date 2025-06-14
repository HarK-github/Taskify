# Taskify App

## Figma design :
[Clink on this link](https://www.figma.com/design/bHAeJU7u9dCuDDhY8H0V2Y/Untitled?node-id=0-1&t=zWdzjA3DKHBb5EdN-1 )
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

# PULL REQUEST RULES

1. Only start working on an issue that is **assigned to you**.
2. **Do not submit a PR** without a corresponding GitHub issue.
3. In your PR description, **mention the issue number it closes** using:

   ```
   Closes #issue_number
   ```
4. Only one issue should be solved per pull request.
5. Your PR will only be accepted if:

   * It is properly linked to the issue.
   * The issue has a points label (e.g., `10 points`).
   * The code follows the structure and naming conventions.
6. Do not work on blocked issues. Wait for dependencies to be resolved.
7. Make sure your code is well formatted and clean before submitting.


### 📌 General Rules

1. **Only claim one issue at a time.** This helps avoid conflicts and encourages quality over quantity.
2. **Check dependencies before working on an issue.**
3. **Mention the issue you’re working on** in your Pull Request title and description.
4. If an issue is marked `blocked`, wait for the dependent issue to be closed before starting work. 

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
