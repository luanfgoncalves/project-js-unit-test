/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    const testArrZero = ['a', 'b', 'c', 'd', 'e'];
    const testArrOne = [1, 2, 3, 4, 5];
    expect(numbers(testArrZero)).toBe(false);
    expect(numbers(testArrOne)).toBe(true);
  });

  test('Verifica se a função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    const testArrOne = [1, 2, 3, 4, 5];
    expect(numbers(testArrOne)).toBe(true);
  });

  test('Verifica se a função recebe [1, 2, "3", 4, 5] e retorna false', () => {
    const testArrTwo = [1, 2, '3', 4, 5];
    expect(numbers(testArrTwo)).toBe(false);
  });

  test('Verifica se a função recebe [1, "a", 3] e retorna false', () => {
    const testArrThree = [1, 'a', 3];
    expect(numbers(testArrThree)).toBe(false);
  });

  test('Verifica se a função recebe [" "] e retorna false', () => {
    const testArrFour = [' '];
    expect(numbers(testArrFour)).toBe(false);
  });
});
