const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const PROFILE_PATH = path.join(__dirname, '..', 'config', 'user-profile.json');

function loadProfile() {
  try {
    if (!fs.existsSync(PROFILE_PATH)) return null;
    const data = fs.readFileSync(PROFILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

function saveProfile(profile) {
  fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile, null, 2) + '\n');
}

async function runOnboarding(colors, colorize) {
  console.clear();
  console.log(colorize('\n🚀 Welcome to the JavaScript Learning CLI!\n', colors.cyan + colors.bright));
  console.log(colorize('Let\'s set up your profile.\n', colors.dim));

  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What\'s your name?',
      validate: (input) => input.trim().length > 0 || 'Please enter your name.',
    },
  ]);

  const { goal } = await inquirer.prompt([
    {
      type: 'list',
      name: 'goal',
      message: 'What\'s your goal?',
      choices: [
        'Interview prep',
        'Learning fundamentals',
        'Building skills',
        'Daily practice',
      ],
    },
  ]);

  const profile = {
    name: name.trim(),
    goal,
    createdAt: new Date().toISOString(),
    quote: { text: null, author: null, date: null },
  };

  saveProfile(profile);
  console.log(colorize(`\n✅ Welcome aboard, ${profile.name}! Let's get started.\n`, colors.green));
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return profile;
}

async function ensureProfile(colors, colorize) {
  let profile = loadProfile();
  if (!profile) {
    profile = await runOnboarding(colors, colorize);
  }
  return profile;
}

module.exports = { loadProfile, saveProfile, ensureProfile };
