const https = require('https');
const { loadProfile, saveProfile } = require('./profile');

const FALLBACK_QUOTES = [
  { text: 'The grind is where greatness is forged.', author: 'Unknown' },
  { text: 'Discipline is choosing between what you want now and what you want most.', author: 'Abraham Lincoln' },
  { text: 'Small daily improvements over time lead to stunning results.', author: 'Robin Sharma' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Success is the sum of small efforts repeated day in and day out.', author: 'Robert Collier' },
  { text: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { text: 'The harder you work for something, the greater you\'ll feel when you achieve it.', author: 'Unknown' },
  { text: 'Push yourself, because no one else is going to do it for you.', author: 'Unknown' },
  { text: 'Great things never come from comfort zones.', author: 'Unknown' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
  { text: 'Consistency is what transforms average into excellence.', author: 'Unknown' },
  { text: 'Every expert was once a beginner.', author: 'Helen Hayes' },
];

function fetchQuoteFromAPI() {
  return new Promise((resolve) => {
    const req = https.get('https://zenquotes.io/api/random', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed && parsed[0] && parsed[0].q) {
            resolve({ text: parsed[0].q, author: parsed[0].a });
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    });

    req.on('error', () => resolve(null));
    req.setTimeout(5000, () => { req.destroy(); resolve(null); });
  });
}

async function getDailyQuote() {
  const today = new Date().toISOString().slice(0, 10);
  const profile = loadProfile();

  if (profile && profile.quote && profile.quote.date === today && profile.quote.text) {
    return { text: profile.quote.text, author: profile.quote.author };
  }

  const apiQuote = await fetchQuoteFromAPI();

  if (apiQuote) {
    if (profile) {
      profile.quote = { text: apiQuote.text, author: apiQuote.author, date: today };
      saveProfile(profile);
    }
    return apiQuote;
  }

  const fallback = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  if (profile) {
    profile.quote = { text: fallback.text, author: fallback.author, date: today };
    saveProfile(profile);
  }
  return fallback;
}

module.exports = { getDailyQuote };
