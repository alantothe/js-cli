#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const exercisesData = require('../config/exercises-manifest.json');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

function getDifficultyBadge(difficulty) {
  const badges = {
    Easy: colorize('Easy', colors.green),
    Medium: colorize('Medium', colors.yellow),
    Hard: colorize('Hard', '\x1b[31m'),
  };
  return badges[difficulty] || difficulty;
}

function getStatusBadge(status) {
  const badges = {
    'Not Started': colorize('Not Started', colors.dim),
    'In Progress': colorize('In Progress', colors.yellow),
    Completed: colorize('Completed', colors.green),
  };
  return badges[status] || status;
}

function displayHeader() {
  console.clear();
  console.log(colorize('\n🚀 JavaScript Learning CLI\n', colors.cyan + colors.bright));
}

async function selectTopic() {
  displayHeader();

  const topicChoices = exercisesData.topics.map((topic) => ({
    name: `${topic.name} - ${topic.description}`,
    value: topic.id,
    short: topic.name,
  }));

  topicChoices.push(new inquirer.Separator());
  topicChoices.push({ name: 'Exit', value: 'exit', short: 'Exit' });

  const { topicId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'topicId',
      message: 'Select a topic:',
      choices: topicChoices,
      pageSize: 15,
    },
  ]);

  if (topicId === 'exit') {
    console.log(colorize('\n👋 Thanks for learning! Goodbye.\n', colors.cyan));
    process.exit(0);
  }

  const selectedTopic = exercisesData.topics.find((t) => t.id === topicId);
  await selectExercise(selectedTopic);
}

async function selectExercise(topic) {
  displayHeader();
  console.log(colorize(`📚 ${topic.name}\n`, colors.bright));

  const exerciseChoices = topic.exercises.map((exercise) => ({
    name: `${exercise.name} ${getDifficultyBadge(exercise.difficulty)} [${getStatusBadge(exercise.status)}]`,
    value: exercise.id,
    short: exercise.name,
  }));

  exerciseChoices.push(new inquirer.Separator());
  exerciseChoices.push({ name: 'Back to Topics', value: 'back', short: 'Back' });
  exerciseChoices.push({ name: 'Exit', value: 'exit', short: 'Exit' });

  const { exerciseId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'exerciseId',
      message: `Select an exercise in ${topic.name}:`,
      choices: exerciseChoices,
      pageSize: 15,
    },
  ]);

  if (exerciseId === 'exit') {
    console.log(colorize('\n👋 Thanks for learning! Goodbye.\n', colors.cyan));
    process.exit(0);
  }

  if (exerciseId === 'back') {
    await selectTopic();
    return;
  }

  const selectedExercise = topic.exercises.find((e) => e.id === exerciseId);
  await exerciseMenu(topic, selectedExercise);
}

async function exerciseMenu(topic, exercise) {
  displayHeader();

  // Convert old naming convention to new naming convention
  // e.g., "1.arr-methods" -> "1-array-methods", "1.map" -> "1-map"
  const topicId = topic.id
    .replace('1.arr-methods', '1-array-methods')
    .replace('2.loops', '2-loops')
    .replace('3.hash-maps', '3-hash-maps')
    .replace('4.math.random', '4-math-random')
    .replace('5.str-methods', '5-string-methods')
    .replace('6.conditional', '6-conditionals')
    .replace('7.functions', '7-functions')
    .replace('linked-list', '8-linked-lists');

  const exerciseId = exercise.id
    .replace('1.map', '1-map')
    .replace('2.filter', '2-filter')
    .replace('3.reduce', '3-reduce')
    .replace('4.find', '4-find')
    .replace('5.slice', '5-slice')
    .replace('6.splice', '6-splice')
    .replace('7.spread', '7-spread')
    .replace('8.forEach', '8-forEach')
    .replace('1.for', '1-for-loop')
    .replace('2.while', '2-while-loop')
    .replace('3.for-of', '3-for-of-loop')
    .replace('1.plain', '1-plain-objects')
    .replace('2.map', '2-map')
    .replace('3.set', '3-set')
    .replace('1.math-random', '1-math-random')
    .replace('1.string', '1-string-methods')
    .replace('1.conditional', '1-conditionals')
    .replace('1.functions', '1-functions')
    .replace('1.linked-list', '1-linked-lists');

  const exercisePath = path.join(__dirname, '..', 'exercises', topicId, exerciseId);

  if (!fs.existsSync(exercisePath)) {
    console.log(colorize(`\n❌ Exercise folder not found: ${exercisePath}\n`, colors.red));
    console.log(colorize('This exercise has not been migrated to the new structure yet.\n', colors.dim));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await selectExercise(topic);
    return;
  }

  console.log(colorize(`📝 ${topic.name} > ${exercise.name}`, colors.bright));
  console.log(`Difficulty: ${getDifficultyBadge(exercise.difficulty)}`);
  console.log(`Status: ${getStatusBadge(exercise.status)}\n`);

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { name: 'Open in VS Code', value: 'open' },
        { name: 'Run Tests', value: 'test' },
        { name: 'Reset Exercise', value: 'reset' },
        new inquirer.Separator(),
        { name: 'Back to Exercises', value: 'back' },
        { name: 'Back to Topics', value: 'topics' },
        { name: 'Exit', value: 'exit' },
      ],
    },
  ]);

  switch (action) {
    case 'open':
      openInVSCode(exercisePath);
      break;
    case 'test':
      await runTests(exercise, topic);
      break;
    case 'reset':
      await resetExercise(topic, exercise);
      break;
    case 'back':
      await selectExercise(topic);
      return;
    case 'topics':
      await selectTopic();
      return;
    case 'exit':
      console.log(colorize('\n👋 Thanks for learning! Goodbye.\n', colors.cyan));
      process.exit(0);
  }

  await exerciseMenu(topic, exercise);
}

function openInVSCode(exercisePath) {
  console.log(colorize(`\n🔓 Opening ${exercisePath} in VS Code...\n`, colors.cyan));

  exec(`code "${exercisePath}"`, (error) => {
    if (error) {
      console.error(
        colorize(
          'Error: Could not open VS Code. Make sure VS Code is installed and the "code" command is available.\n',
          '\x1b[31m'
        )
      );
    } else {
      console.log(colorize('VS Code opened! When you\'re done, press Enter to return to the menu.\n', colors.green));
    }
  });

  // Wait for user to press Enter
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('', () => {
    rl.close();
  });
}

function runTests(exercise, topic) {
  return new Promise((resolve) => {
    console.log(colorize(`\n🧪 Running tests for ${exercise.name}...\n`, colors.cyan));

    // Convert old naming convention to new naming convention
    const topicId = topic.id
      .replace('1.arr-methods', '1-array-methods')
      .replace('2.loops', '2-loops')
      .replace('3.hash-maps', '3-hash-maps')
      .replace('4.math.random', '4-math-random')
      .replace('5.str-methods', '5-string-methods')
      .replace('6.conditional', '6-conditionals')
      .replace('7.functions', '7-functions')
      .replace('linked-list', '8-linked-lists');

    const exerciseId = exercise.id
      .replace('1.map', '1-map')
      .replace('2.filter', '2-filter')
      .replace('3.reduce', '3-reduce')
      .replace('4.find', '4-find')
      .replace('5.slice', '5-slice')
      .replace('6.splice', '6-splice')
      .replace('7.spread', '7-spread')
      .replace('8.forEach', '8-forEach')
      .replace('1.for', '1-for-loop')
      .replace('2.while', '2-while-loop')
      .replace('3.for-of', '3-for-of-loop')
      .replace('1.plain', '1-plain-objects')
      .replace('2.map', '2-map')
      .replace('3.set', '3-set')
      .replace('1.math-random', '1-math-random')
      .replace('1.string', '1-string-methods')
      .replace('1.conditional', '1-conditionals')
      .replace('1.functions', '1-functions')
      .replace('1.linked-list', '1-linked-lists');

    const testFile = `exercises/${topicId}/${exerciseId}/solution.test.js`;
    exec(`npm test -- "${testFile}" -- --no-coverage 2>&1`, (error, stdout, stderr) => {
      // Print all output (stdout + stderr combined)
      console.log(stdout);
      if (stderr) {
        console.log(stderr);
      }

      console.log(colorize('\n✨ Press Enter to return to the menu.\n', colors.yellow));

      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question('', () => {
        rl.close();
        resolve();
      });
    });
  });
}

async function resetExercise(topic, exercise) {
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `Are you sure you want to reset "${exercise.name}"? Your current solution will be lost.`,
      default: false,
    },
  ]);

  if (!confirm) {
    return;
  }

  // Convert old naming convention to new naming convention
  const topicId = topic.id
    .replace('1.arr-methods', '1-array-methods')
    .replace('2.loops', '2-loops')
    .replace('3.hash-maps', '3-hash-maps')
    .replace('4.math.random', '4-math-random')
    .replace('5.str-methods', '5-string-methods')
    .replace('6.conditional', '6-conditionals')
    .replace('7.functions', '7-functions')
    .replace('linked-list', '8-linked-lists');

  const exerciseId = exercise.id
    .replace('1.map', '1-map')
    .replace('2.filter', '2-filter')
    .replace('3.reduce', '3-reduce')
    .replace('4.find', '4-find')
    .replace('5.slice', '5-slice')
    .replace('6.splice', '6-splice')
    .replace('7.spread', '7-spread')
    .replace('8.forEach', '8-forEach')
    .replace('1.for', '1-for-loop')
    .replace('2.while', '2-while-loop')
    .replace('3.for-of', '3-for-of-loop')
    .replace('1.plain', '1-plain-objects')
    .replace('2.map', '2-map')
    .replace('3.set', '3-set')
    .replace('1.math-random', '1-math-random')
    .replace('1.string', '1-string-methods')
    .replace('1.conditional', '1-conditionals')
    .replace('1.functions', '1-functions')
    .replace('1.linked-list', '1-linked-lists');

  const backupPath = path.join(__dirname, '..', 'exercises', '__backups__', topicId, exerciseId);
  const exercisePath = path.join(__dirname, '..', 'exercises', topicId, exerciseId);

  if (!fs.existsSync(backupPath)) {
    console.log(colorize('\n❌ Backup not found. Cannot reset exercise.\n', '\x1b[31m'));
    return;
  }

  try {
    // Remove current exercise folder and copy from backup
    fs.rmSync(exercisePath, { recursive: true, force: true });
    fs.cpSync(backupPath, exercisePath, { recursive: true });
    console.log(colorize(`\n✅ "${exercise.name}" has been reset to its original state.\n`, colors.green));
  } catch (error) {
    console.log(colorize(`\n❌ Error resetting exercise: ${error.message}\n`, '\x1b[31m'));
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
}

async function main() {
  try {
    await selectTopic();
  } catch (error) {
    console.error(colorize(`Error: ${error.message}`, '\x1b[31m'));
    process.exit(1);
  }
}

main();
