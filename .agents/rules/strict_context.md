---
trigger: always_on
---

---
name: strict-context-only
description: Strictly forbids exploratory directory scans and file reads outside PROJECT_CONTEXT.md
---

# Strict Context & No Exploration Rule

1. NEVER call `list_dir`, `grep_search`, or inspect files across the codebase to explore structure or styles.
2. The ONLY reference file allowed for architecture, structure, and paths is `PROJECT_CONTEXT.md`.
3. Read ONLY the explicit file(s) you are instructed to edit or create, plus the direct API endpoint it calls.
4. If a path or detail is missing from `PROJECT_CONTEXT.md`, ask the user directly instead of inspecting sibling files.
5. Violating this by inspecting unrelated files is a failure of the task.
