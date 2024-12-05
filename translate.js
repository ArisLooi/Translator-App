const translations = {
  malay: {
    morning: 'pagi',
    afternoon: 'tengahari',
    evening: 'petang',
    night: 'malam',
    hello: 'hello',
  },
  spanish: {
    morning: 'mañana',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noche',
    hello: 'hola',
  },
  french: {
    morning: 'matin',
    afternoon: 'après-midi',
    evening: 'soir',
    night: 'nuit',
    hello: 'bonjour',
  },
  german: {
    morning: 'morgen',
    afternoon: 'nachmittag',
    evening: 'abend',
    night: 'nacht',
    hello: 'hallo',
  },
  chinese: {
    morning: '早上',
    afternoon: '下午',
    evening: '晚上',
    night: '晚',
    hello: '你好',
  },
};

export function translate(language, inputText) {
  return translations[language][inputText];
}
