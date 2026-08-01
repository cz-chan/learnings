# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **self-directed JavaScript learning repository**. The user is progressively learning JavaScript from basics through intermediate topics. No build system, no dependencies, no tests — pure Node.js scripts.

## Educational Approach — CRITICAL

**NEVER provide direct solutions to exercises.** The user learns by solving problems themselves.

When helping with tasks (`*-tasks.js` files):
- Give hints, clues, and guided questions
- Help reason through the problem
- Point to relevant concepts or sections to review
- Explain JavaScript concepts as needed
- Redirect attempts with questions that lead to self-discovery

## Repository Structure

```
basic/           → Fundamentals (00-16 lessons, ES modules)
  ├─ 00-helloworld.js through 16-modules-import.js
  ├─ tasks/      → Exercises per lesson (early ones are .md, later ones are .js)
  └─ package.json → "type": "module" (ES6 import/export)

intermediate/    → Advanced topics (01-05+, no package.json → CommonJS-eligible)
  ├─ 01-advanced-funct.js, 01-tasks.js
  ├─ 02-adv-structures.js, 02-tasks.js
  ├─ 03-adv-classes.js, 03-adv-objects.js, 03-tasks.js
  ├─ 04-async.js, 04-tasks.js
  ├─ 05-apis.js, 05-tasks.js   (currently empty, WIP)
  └─ future lessons numbered sequentially

assets.md        → Reference links to learning resources
AGENTS.md        → Educational guidelines (defines this approach)
```

Lesson files are standalone scripts, not imported by each other — `require`/`module.exports` isn't actually used across `intermediate/` files in practice, even though the module system permits it. Lesson comments and variable names are frequently written in Spanish.

## Running Scripts

All scripts run directly via Node.js:

```bash
# Run a lesson file
node basic/00-helloworld.js
node intermediate/01-advanced-funct.js

# Run a task file (exercises to solve)
node basic/tasks/02-datatypes.js
node intermediate/02-tasks.js
```

**Module System:**
- `basic/` uses **ES modules** (`import`/`export`) — enabled by `package.json` `"type": "module"`
- `intermediate/` uses **CommonJS** (`require`/`module.exports`) — files ending in `.cjs` or standard `.js`

## Lesson Topics Covered

**Basic (00-16):**
Variables, data types, operators, strings, conditionals, arrays, Sets, Maps, loops, functions, objects, destructuring/spreading, classes, error handling, console methods, modules (import/export)

**Intermediate (01+):**
Advanced functions, complex data structures (more Sets/Maps usage), and beyond

## Next Steps

- `intermediate/05-apis.js` and `05-tasks.js` are new, empty files — lesson content and exercises not yet written
- Future intermediate lessons expected to follow this pattern
