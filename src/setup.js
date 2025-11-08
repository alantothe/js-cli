#!/usr/bin/env node

/**
 * Setup script for converting existing exercise files to the new structure
 * and creating backup copies.
 *
 * Usage: node setup.js
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bright: '\x1b[1m',
};

function log(msg, color = colors.reset) {
  console.log(`${color}${msg}${colors.reset}`);
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

/**
 * This function will be called to set up the initial structure.
 * For now, it just ensures directories exist.
 */
function setupExerciseStructure() {
  log('\n🔧 Setting up exercise structure...\n', colors.cyan);

  const topics = [
    '1.arr-methods',
    '2.loops',
    '3.hash-maps',
    '4.math.random',
    '5.str-methods',
    '6.conditional',
    '7.functions',
    'linked-list',
  ];

  topics.forEach((topic) => {
    const topicPath = path.join(__dirname, topic);
    if (fs.existsSync(topicPath)) {
      log(`✓ Found topic: ${topic}`, colors.green);
    }
  });

  log('\n✅ Setup complete!\n', colors.green);
  log('Note: Exercise files need to be manually refactored into the new structure.', colors.yellow);
  log('Each exercise folder should contain:', colors.cyan);
  log('  - exercise.js (template for users to fill in)', colors.cyan);
  log('  - exercise.test.js (Jest tests)\n', colors.cyan);
}

setupExerciseStructure();
