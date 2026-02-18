const React = require('react');
const { render, Box, Text } = require('ink');

const h = React.createElement;

function ProgressBar({ completed, total, width }) {
  width = width || 30;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const filled = total === 0 ? 0 : Math.round((completed / total) * width);
  const empty = width - filled;
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(empty);
  return h(Text, null, bar + ' ' + pct + '%');
}

function MiniBar({ completed, total, width }) {
  width = width || 12;
  const filled = total === 0 ? 0 : Math.round((completed / total) * width);
  const empty = width - filled;
  const bar = '\u2588'.repeat(filled) + '\u2591'.repeat(empty);
  return h(Text, { dimColor: completed === 0 }, bar);
}

function HRule({ ch, width }) {
  return h(Text, { dimColor: true }, (ch || '\u2500').repeat(width || 40));
}

function truncate(text, max) {
  if (!text) return '';
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + '\u2026';
}

function Dashboard({ profile, topics, quote }) {
  const allExercises = [];
  topics.forEach(function (t) {
    t.exercises.forEach(function (ex) {
      allExercises.push(ex);
    });
  });

  const totalExercises = allExercises.length;
  const completedExercises = allExercises.filter(function (e) { return e.status === 'Completed'; }).length;

  const easy = allExercises.filter(function (e) { return e.difficulty === 'Easy'; });
  const medium = allExercises.filter(function (e) { return e.difficulty === 'Medium'; });
  const hard = allExercises.filter(function (e) { return e.difficulty === 'Hard'; });
  const easyDone = easy.filter(function (e) { return e.status === 'Completed'; }).length;
  const mediumDone = medium.filter(function (e) { return e.status === 'Completed'; }).length;
  const hardDone = hard.filter(function (e) { return e.status === 'Completed'; }).length;

  return h(Box, { flexDirection: 'column', paddingX: 1, paddingY: 1 },
    h(Text, { bold: true, color: 'cyan' }, 'Hi, ' + profile.name),
    h(Text, { dimColor: true }, 'Goal: ' + profile.goal),
    h(HRule, { width: 66 }),

    h(Text, { bold: true, color: 'green' }, 'Quote'),
    h(Text, { italic: true, wrap: 'truncate-end' }, '"' + truncate(quote ? quote.text : '', 72) + '"'),
    h(Text, { dimColor: true }, '\u2014 ' + (quote ? quote.author : 'Unknown')),
    h(Text, null, ''),

    h(Text, { bold: true, color: 'cyan' }, 'Progress  ' + completedExercises + '/' + totalExercises),
    h(ProgressBar, { completed: completedExercises, total: totalExercises, width: 40 }),
    h(Text, null, ''),

    h(Text, { bold: true, color: 'magenta' }, 'Difficulty'),
    h(Box, { flexDirection: 'row' },
      h(Box, { marginRight: 4, flexDirection: 'column' },
        h(Text, { color: 'green' }, 'Easy   ' + easyDone + '/' + easy.length),
        h(MiniBar, { completed: easyDone, total: easy.length })
      ),
      h(Box, { marginRight: 4, flexDirection: 'column' },
        h(Text, { color: 'yellow' }, 'Medium ' + mediumDone + '/' + medium.length),
        h(MiniBar, { completed: mediumDone, total: medium.length })
      ),
      h(Box, { flexDirection: 'column' },
        h(Text, { color: 'red' }, 'Hard   ' + hardDone + '/' + hard.length),
        h(MiniBar, { completed: hardDone, total: hard.length })
      )
    ),
    h(Text, null, ''),

    h(Text, { bold: true, color: 'blue' }, 'Topics'),
    h(HRule, { width: 66 }),
    h(Box, { flexDirection: 'column' },
      topics.map(function (topic) {
        var done = topic.exercises.filter(function (e) { return e.status === 'Completed'; }).length;
        var total = topic.exercises.length;
        var nameStr = truncate(topic.name, 28);
        while (nameStr.length < 30) nameStr += ' ';
        return h(Box, { key: topic.id, flexDirection: 'row' },
          h(Text, null, nameStr),
          h(MiniBar, { completed: done, total: total, width: 10 }),
          h(Text, { dimColor: done === 0 }, ' ' + done + '/' + total)
        );
      })
    ),
    h(Text, null, ''),
    h(Text, { dimColor: true }, 'Press any key to continue...')
  );
}

function showDashboard(profile, exercisesData, quote) {
  return new Promise(function (resolve) {
    const instance = render(h(Dashboard, {
      profile: profile,
      topics: exercisesData.topics,
      quote: quote,
    }));

    const stdin = process.stdin;
    const wasRaw = stdin.isRaw;

    function cleanup() {
      stdin.removeListener('data', onKey);
      if (!wasRaw && stdin.setRawMode) {
        try { stdin.setRawMode(false); } catch (e) { /* ignore */ }
      }
      instance.unmount();
      resolve();
    }

    function onKey(data) {
      // Ctrl+C
      if (data[0] === 3) {
        cleanup();
        process.exit(0);
      }
      cleanup();
    }

    if (stdin.setRawMode) {
      try { stdin.setRawMode(true); } catch (e) { /* ignore */ }
    }
    stdin.resume();
    stdin.once('data', onKey);
  });
}

module.exports = { showDashboard };
