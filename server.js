const fetch = require('node-fetch');

/**
 *Translate English text to Korean  using LibreTranslate API
 * @param {string} text - English text to translate
 * @returns {Promise<string>} - Translated Korean text
 */
async function translateToKorean(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error('Input must be a non-empty string.');
  }

  const response = await fetch('https://libretranslate.de/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: text,
      source: 'en',
      target: 'ko',
      format: 'text'
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`Translation API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.translatedText;
}

module.exports = translateToKorean;
