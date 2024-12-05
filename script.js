import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById('inputText').value.trim();
  const language = document.getElementById('language').value;
  const translated = translate(language, inputText);

  if (translated === undefined) {
    document.getElementById('translatedText').value = 'Translation not found.';
  } else {
    document.getElementById(
      'translatedText'
    ).value = `Translation: ${translated}`;
  }
}

window.translateText = translateText;
