const colaObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const colaArray = ['brown', true, 40];

const colaTuple: [string, boolean, number] = ['brown', true, 40];
// colaTuple[1] = 'orange'; // ошибка, тк добавляется неверный тип, не тот, который указан в аннотации