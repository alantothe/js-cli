const React = require('react');
const { render, Box, Text, useInput } = require('ink');

const h = React.createElement;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function TopicCard({ topic, selected }) {
  const total = topic.exercises.length;
  const done = topic.exercises.filter((ex) => ex.status === 'Completed').length;

  return h(
    Box,
    {
      width: 42,
      minHeight: 5,
      borderStyle: 'round',
      borderColor: selected ? 'cyan' : 'gray',
      paddingX: 1,
      marginRight: 1,
      marginBottom: 1,
      flexDirection: 'column',
    },
    h(Text, { bold: selected, color: selected ? 'cyan' : undefined }, topic.name),
    h(Text, { dimColor: true }, done + '/' + total + ' complete')
  );
}

function TopicPicker({ profile, topics, onSelect, onDashboard, onExit }) {
  const [index, setIndex] = React.useState(0);
  const name = profile && profile.name ? profile.name : 'Learner';
  const cols = 2;
  const pageRows = 5;
  const totalRows = Math.ceil(topics.length / cols);
  const selectedRow = Math.floor(index / cols);
  const rowStart = Math.floor(selectedRow / pageRows) * pageRows;
  const rowEnd = Math.min(totalRows, rowStart + pageRows);

  useInput((input, key) => {
    if (key.return) return onSelect(topics[index].id);
    if (input === 'q') return onExit();
    if (input === 'd') return onDashboard();

    if (key.leftArrow || input === 'h') {
      return setIndex((prev) => clamp(prev - 1, 0, topics.length - 1));
    }
    if (key.rightArrow || input === 'l') {
      return setIndex((prev) => clamp(prev + 1, 0, topics.length - 1));
    }
    if (key.upArrow || input === 'k') {
      return setIndex((prev) => clamp(prev - cols, 0, topics.length - 1));
    }
    if (key.downArrow || input === 'j') {
      return setIndex((prev) => clamp(prev + cols, 0, topics.length - 1));
    }
  });

  const rows = [];
  for (let r = rowStart; r < rowEnd; r += 1) {
    const start = r * cols;
    const rowTopics = topics.slice(start, start + cols);
    rows.push(
      h(
        Box,
        { key: 'row-' + r, flexDirection: 'row' },
        rowTopics.map((topic, i) => {
          const absolute = start + i;
          return h(TopicCard, { key: topic.id, topic, selected: absolute === index });
        })
      )
    );
  }

  return h(
    Box,
    { flexDirection: 'column', paddingX: 1, paddingY: 1 },
    h(Text, { bold: true, color: 'cyan' }, 'JavaScript DSA CLI'),
    h(Text, { dimColor: true }, 'Hi, ' + name + '  |  Topics'),
    h(Text, { dimColor: true }, 'Enter open  Arrow keys move  d dashboard  q exit'),
    h(Text, { dimColor: true }, ''),
    ...rows,
    h(Text, { dimColor: true }, 'Page ' + (Math.floor(selectedRow / pageRows) + 1) + ' | ' + topics.length + ' topics')
  );
}

function selectTopicWithCards(profile, topics) {
  return new Promise((resolve) => {
    let instance;
    function finish(value) {
      if (instance) instance.unmount();
      resolve(value);
    }

    instance = render(
      h(TopicPicker, {
        profile,
        topics,
        onSelect: finish,
        onDashboard: function () { finish('dashboard'); },
        onExit: function () { finish('exit'); },
      })
    );
  });
}

module.exports = { selectTopicWithCards };
