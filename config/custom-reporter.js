/**
 * Custom Jest Reporter with Large PASS/FAIL Boxes
 * Shows prominent colored boxes and console output
 */

class CustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.testResults = [];
    this.consoleOutput = [];
  }

  onTestResult(test, testResult, aggregatedResult) {
    // Store test results for later processing
    this.testResults.push({
      path: test.path,
      results: testResult.testResults,
      console: testResult.console
    });
  }

  createProblemName(testTitle) {
    // Map common test patterns to problem names
    const problemMap = {
      'empty array': 'Empty Array Not Handled',
      'negative number': 'Negative Numbers Not Handled',
      'negative': 'Negative Values Not Handled',
      'single': 'Single Item Not Handled',
      'null': 'Null Value Not Handled',
      'undefined': 'Undefined Value Not Handled',
      'float': 'Floating Point Not Handled',
      'string': 'String Value Not Handled',
      'object': 'Object Not Handled',
      'duplicate': 'Duplicate Values Not Handled',
      'order': 'Order Not Preserved',
      'mutate': 'Original Array Mutated',
      'spread': 'Spread Operator Not Used',
      'map': 'Map Method Not Used',
      'filter': 'Filter Method Not Used',
      'reduce': 'Reduce Method Not Used',
      'find': 'Find Method Not Used',
      'slice': 'Slice Method Not Used',
      'splice': 'Splice Method Not Used',
      'forEach': 'ForEach Method Not Used',
      'double': 'Doubling Logic Wrong',
      'extract': 'Value Extraction Failed',
      'uppercase': 'Uppercase Conversion Failed',
      'html': 'HTML Generation Failed',
      'tax': 'Tax Calculation Failed',
      'count': 'Counting Logic Failed',
      'flatten': 'Array Flattening Failed',
      'combine': 'Array Combination Failed'
    };

    // Check if test title contains any of the problem keywords
    for (const [keyword, problemName] of Object.entries(problemMap)) {
      if (testTitle.toLowerCase().includes(keyword)) {
        return problemName;
      }
    }

    // Default: create problem name from test title
    return testTitle
      .replace(/^should\s+/, '')
      .split(' ')
      .map((word, index) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
      .join(' ')
      .replace(/\s+/g, ' ') + ' - Implementation Issue';
  }

  onRunComplete(contexts, results) {
    console.log('\n');

    // Get the last test file that was run
    if (this.testResults.length > 0) {
      const lastTest = this.testResults[this.testResults.length - 1];
      const testResults = lastTest.results;
      const consoleOutput = lastTest.console;

      // Extract file path
      const filePath = lastTest.path.split('/').slice(-3).join('/');

      // Group tests by exercise/problem
      const groupedByExercise = {};
      testResults.forEach((test) => {
        // Extract exercise number from ancestor titles
        const exerciseMatch = test.ancestorTitles.find(title => title.includes('Exercise'));
        const exerciseKey = exerciseMatch || 'Other';

        if (!groupedByExercise[exerciseKey]) {
          groupedByExercise[exerciseKey] = [];
        }
        groupedByExercise[exerciseKey].push(test);
      });

      // Count results per exercise
      const exerciseResults = {};
      let totalExercises = 0;
      let passedExercises = 0;
      const failedExercises = [];

      Object.entries(groupedByExercise).forEach(([exerciseKey, tests]) => {
        totalExercises++;
        const allPassed = tests.every(t => t.status === 'passed');
        const failedTests = tests.filter(t => t.status === 'failed');

        if (allPassed) {
          passedExercises++;
        } else {
          failedExercises.push({ exercise: exerciseKey, failedTests });
        }
      });

      // Print console output first if any
      if (consoleOutput && consoleOutput.length > 0) {
        console.log('\x1b[33m' + '═'.repeat(70) + '\x1b[0m');
        console.log('\x1b[33m📝 YOUR CONSOLE OUTPUT\x1b[0m');
        console.log('\x1b[33m' + '═'.repeat(70) + '\x1b[0m');
        consoleOutput.forEach((log) => {
          console.log('  ' + log.message);
        });
        console.log('');
      }

      // Big PASS or FAIL box
      if (failedExercises.length === 0) {
        // PASS BOX - Bright green background
        console.log('\x1b[42m\x1b[1m\x1b[30m' + ' '.repeat(70) + '\x1b[0m');
        console.log('\x1b[42m\x1b[1m\x1b[30m  PASS  ' + filePath + ' '.repeat(70 - 8 - filePath.length) + '\x1b[0m');
        console.log('\x1b[42m\x1b[1m\x1b[30m' + ' '.repeat(70) + '\x1b[0m');
      } else {
        // FAIL BOX - Bright red background
        console.log('\x1b[41m\x1b[1m\x1b[37m' + ' '.repeat(70) + '\x1b[0m');
        console.log('\x1b[41m\x1b[1m\x1b[37m  FAIL  ' + filePath + ' '.repeat(70 - 8 - filePath.length) + '\x1b[0m');
        console.log('\x1b[41m\x1b[1m\x1b[37m' + ' '.repeat(70) + '\x1b[0m');
      }

      console.log('');

      // Show problem status - one per exercise
      console.log('\x1b[36m' + '─'.repeat(70) + '\x1b[0m');
      console.log('\x1b[36m📋 PROBLEM STATUS:\x1b[0m');
      console.log('\x1b[36m' + '─'.repeat(70) + '\x1b[0m');

      let problemIndex = 1;
      Object.entries(groupedByExercise).forEach(([exerciseKey, tests]) => {
        const allPassed = tests.every(t => t.status === 'passed');

        // Extract problem name from first test in the group
        const problemName = this.createProblemName(tests[0].title);

        if (allPassed) {
          console.log(`  \x1b[32m✓ ${problemIndex}. ${problemName}\x1b[0m`);
        } else {
          console.log(`  \x1b[31m✗ ${problemIndex}. ${problemName}\x1b[0m`);
        }
        problemIndex++;
      });

      console.log('');

      // Summary stats
      console.log('\x1b[36m' + '─'.repeat(70) + '\x1b[0m');
      console.log(`\x1b[1m  ${passedExercises}/${totalExercises} problems solved\x1b[0m`);
      if (failedExercises.length > 0) {
        console.log(`\x1b[31m\x1b[1m  ${failedExercises.length}/${totalExercises} problems need work\x1b[0m`);
      }
      console.log('\x1b[36m' + '─'.repeat(70) + '\x1b[0m');
    }

    console.log('\n');
  }
}

module.exports = CustomReporter;
