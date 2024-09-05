const colors: string[] = ['red', 'green', 'orange'];

const fruitsByColor = [
  ['tomato'],
  ['orange'],
  ['lemon']
];

const firstColor = colors[0];

colors.map((color: string): string => {
  return color.toUpperCase();
});

// гибкие типы
const importantDates = [new Date(), '2021-11-11'];

// const importantDates2 = [new Date()];
// importantDates2.push('2021-11-11'); // ошибка

const importantDates3: (Date | string)[] = [new Date()];
importantDates3.push('2021-11-11');