# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript Learning CLI—an interactive command-line learning platform for JavaScript fundamentals. It guides users through structured exercises organized by topics (Array Methods, Loops, Hash Maps, Functions, etc.) with Jest-based testing and immediate feedback.

## Folder Structure

```
lib/
├── exercises/
│   ├── 1-array-methods/
│   │   ├── 1-map/
│   │   │   ├── solution.js (user fills this in)
│   │   │   ├── solution.test.js (Jest tests)
│   │   │   └── README.md
│   │   ├── 2-filter/
│   │   └── ... (8 exercises total)
│   ├── 2-loops/
│   │   ├── 1-for-loop/
│   │   ├── 2-while-loop/
│   │   └── 3-for-of-loop/
│   ├── 3-hash-maps/ (plain objects, Map, Set)
│   ├── 4-math-random/
│   ├── 5-string-methods/
│   ├── 6-conditionals/
│   ├── 7-functions/
│   ├── 8-linked-lists/
│   └── __backups__/ (mirrors exercise structure for reset functionality)
├── src/
│   ├── cli.js (interactive CLI entry point)
│   └── setup.js
├── config/
│   ├── jest.config.js
│   ├── custom-reporter.js
│   └── exercises-manifest.json (metadata: topics, exercises, difficulty)
├── package.json
└── CLAUDE.md
```

## Common Development Commands

- `npm start` - Launch the interactive CLI
- `npm test` - Run all tests with custom reporter
- `npm run test:watch` - Run tests in watch mode
- `npm test -- "exercises/1-array-methods/1-map/solution.test.js"` - Run specific exercise tests

## Architecture

### Core Components

**CLI Entry Point** (`src/cli.js`):
- Interactive menu system using Inquirer.js for topic and exercise selection
- Menu actions: open exercise in VS Code, run tests, reset exercise
- Handles navigation between topics, exercises, and menus
- Uses ANSI color codes for terminal output
- Converts between old exercise IDs (from exercises-manifest.json) and new folder naming

**Exercise Metadata** (`config/exercises-manifest.json`):
- Central registry of all topics and exercises (unchanged from original exercises.json)
- Defines structure: topics → exercises
- Each exercise has: id, name, description, difficulty, and status
- Status tracks: "Not Started", "In Progress", "Completed"

**Test Framework**:
- Uses Jest with custom test runner configuration (`config/jest.config.js`)
- Custom reporter (`config/custom-reporter.js`) for user-friendly test output
- Test files named `solution.test.js` and located in exercise folders
- Reporter groups tests by exercise, shows pass/fail boxes, and displays problem-specific feedback

**Exercise Structure**:
- Each exercise folder (`exercises/{topic}/{exercise}/`) contains:
  - `solution.js` - Template file where users write their solution
  - `solution.test.js` - Jest tests that validate the solution
  - `README.md` - Learning objectives and concepts
- Organized by topic: `exercises/1-array-methods/1-map/`, etc.
- Backup copies stored in `exercises/__backups__/` for reset functionality
- All tests run with `npm test` from project root

### Data Flow

1. User runs `npm start` → CLI displays topics from exercises-manifest.json
2. User selects topic → displays exercises in that topic
3. User selects exercise → menu offers: open in VS Code, run tests, or reset
4. Running tests executes Jest with custom reporter for formatted feedback
5. Reset functionality copies original files from `exercises/__backups__/{topic}/{exercise}/`

## Key Implementation Details

**Naming Convention Mapping**:
- Old IDs (in exercises-manifest.json): `1.arr-methods`, `1.map`, `2.loops`, etc.
- New folder names: `1-array-methods`, `1-map`, `2-loops`, etc.
- CLI handles conversion using `.replace()` chains in `exerciseMenu()` and `resetExercise()`

**Custom Test Reporter** (`config/custom-reporter.js`):
- Maps test keywords to user-friendly problem descriptions (e.g., "empty array" → "Empty Array Not Handled")
- Shows colored PASS/FAIL boxes for immediate visual feedback
- Groups test results by exercise, displaying pass/fail count
- Displays console output separately for debugging

**Configuration** (`config/jest.config.js`):
- Jest configured to use Node environment
- Test files matched via `**/exercises/**/*.test.js`
- Coverage excludes `__backups__` directory
- Custom reporter path set to `config/custom-reporter.js`
- Test timeout: 10 seconds
- Silent mode enabled for cleaner output

## Adding New Exercises

To add a new exercise:

1. Add exercise definition to `config/exercises-manifest.json` under the appropriate topic
2. Create a folder: `exercises/{topic-name}/{exercise-number-name}/`
3. Add `solution.js` (template for user solution)
4. Add `solution.test.js` (Jest tests, import from `./solution.js`)
5. Add `README.md` (learning objectives and concepts)
6. Create backup copy in `exercises/__backups__/{topic-name}/{exercise-number-name}/`
7. Update naming mapping in `src/cli.js` if using new naming conventions

## Testing

- Run all tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Run specific exercise: `npm test -- "exercises/1-array-methods/1-map/solution.test.js"`
- Tests use Jest's expect() API with custom reporter for formatted output
- Each exercise isolated in its own test file and folder
