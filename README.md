# JavaScript Learning CLI

An interactive command-line learning platform for JavaScript fundamentals. This tool guides users through structured exercises organized by topics with Jest-based testing and immediate feedback.

## Built with:

<p>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img alt="Jest" src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img alt="Node.js" src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
</p>

## Features

- **Interactive CLI Menu**: Navigate through topics and exercises with an intuitive interface
- **Jest-Based Testing**: Instant feedback on exercise solutions with a custom test reporter
- **Comprehensive Topics**:
  - Array Methods (map, filter, reduce, etc.)
  - Loops (for, while, for...of)
  - Hash Maps (objects, Map, Set)
  - Math & Random
  - String Methods
  - Conditionals
  - Functions
  - Linked Lists
  - Helper Methods
  - Common Patterns
  - Searching & Sorting Algorithms
  - Recursion
  - Data Structures
  - Plus LeetCode & HackerRank challenges
- **VS Code Integration**: Open exercises directly in VS Code from the CLI
- **Exercise Reset**: Reset any exercise to its original state
- **Progress Tracking**: Monitor your learning progress

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Visual Studio Code** (optional, for opening exercises directly)
- **VS Code `code` command** (optional, for opening exercises from CLI)
  - On macOS/Linux: Install from VS Code using `Cmd+Shift+P` → "Shell Command: Install 'code' command in PATH"
  - On Windows: The `code` command is automatically added to PATH during installation

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/javascript-learning-cli.git
   cd javascript-learning-cli
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the CLI**:
   ```bash
   npm start
   ```

## Usage

### Starting the Application

```bash
npm start
```

This launches the interactive CLI menu where you can:

1. **Select a Topic**: Choose from 17 topics covering JavaScript fundamentals to advanced algorithms
2. **Select an Exercise**: Pick an exercise within the selected topic
3. **Choose an Action**:
   - **Open in VS Code**: Opens the exercise in your default editor
   - **Run Tests**: Executes Jest tests for the exercise and displays results
   - **Reset Exercise**: Restores the exercise to its original template

### Running Tests

Run all tests at once:
```bash
npm test
```

Run tests in watch mode (tests re-run on file changes):
```bash
npm run test:watch
```

Run tests for a specific exercise:
```bash
npm test -- "exercises/1-array-methods/1-map/solution.test.js"
```

## Project Structure

```
javascript-learning-cli/
├── exercises/
│   ├── 1-array-methods/       # Array method exercises (map, filter, etc.)
│   ├── 2-loops/                # Loop exercises (for, while, for...of)
│   ├── 3-hash-maps/            # Object, Map, Set exercises
│   ├── 4-math-random/          # Math and random number exercises
│   ├── 5-string-methods/       # String method exercises
│   ├── 6-conditionals/         # Conditional logic exercises
│   ├── 7-functions/            # Function exercises
│   ├── 8-linked-lists/         # Linked list exercises
│   ├── 9-10-helper-methods/    # Helper method exercises
│   ├── 11-common-patterns/     # Common JavaScript patterns
│   ├── 12-searching-algos/     # Searching algorithm challenges
│   ├── 13-recursion/           # Recursion exercises
│   ├── 14-sorting-algos/       # Sorting algorithm challenges
│   ├── 15-data-structures/     # Data structure exercises
│   ├── 16-hackerrank/          # HackerRank challenges
│   ├── 17-leetcode/            # LeetCode challenges
│   └── __backups__/            # Original backup copies for reset functionality
├── src/
│   ├── cli.js                  # Interactive CLI entry point
│   └── setup.js                # Setup utilities
├── config/
│   ├── jest.config.js          # Jest configuration
│   ├── custom-reporter.js      # Custom test output formatter
│   └── exercises-manifest.json # Exercise metadata and structure
├── package.json
└── README.md
```

## Exercise Structure

Each exercise folder contains:

- **`solution.js`**: Template file where you write your solution
- **`solution.test.js`**: Jest tests that validate your solution
- **`README.md`**: Learning objectives and key concepts

### Example Exercise

```
exercises/1-array-methods/1-map/
├── solution.js          # Write your code here
├── solution.test.js     # Tests your solution
└── README.md           # Learning guide
```

## How It Works

1. **Select a Topic**: Browse topics covering different JavaScript concepts
2. **Pick an Exercise**: Choose an exercise within that topic
3. **Write Your Solution**: Edit `solution.js` in your editor
4. **Run Tests**: Get instant feedback on your implementation
5. **Learn from Results**: The custom reporter highlights what's working and what needs fixing
6. **Move Forward**: Once all tests pass, move to the next exercise

## Custom Test Reporter

The custom test reporter provides:

- **Colored Pass/Fail Boxes**: Visual indicators for test results
- **Problem Descriptions**: User-friendly descriptions of what failed (e.g., "Empty Array Not Handled")
- **Grouped Results**: Tests organized by exercise for easy scanning
- **Console Output**: Separate display of debug information

## Tips for Success

- **Read the README**: Each exercise includes a README with learning objectives and concepts
- **Start Simple**: Begin with array methods and loops before moving to advanced topics
- **Test Often**: Run tests frequently to validate your understanding
- **Reset if Needed**: Use the reset feature to start an exercise over
- **Understand, Don't Memorize**: Focus on understanding the concepts, not just making tests pass

## Common Commands

```bash
# Start the interactive CLI
npm start

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run a specific exercise
npm test -- "exercises/1-array-methods/1-map/solution.test.js"
```

## Contributing

Contributions are welcome! Here's how to help:

1. Fork the repository
2. Create a new branch for your changes
3. Add or improve exercises, fix bugs, or enhance the CLI
4. Submit a pull request with a clear description

## License

ISC

## Support

If you encounter issues or have questions:

- Check the exercise README files for learning resources
- Review the test output to understand what's expected
- Verify your Node.js version is v14 or higher

Enjoy learning JavaScript!
