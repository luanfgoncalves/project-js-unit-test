/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const { TestScheduler } = require('jest');
const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle(10)).toHavePropety('radius');
    expect(circle(10)).toHavePropety('area');
    expect(circle(10)).toHavePropety('circumference');
    fail('A função "circle" não retorna um objeto contendo os valores esperados!');
  });

  test('verifica se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('a')).toBeUndefined();
    expect(circle(['a', 'b'])).toBeUndefined();
    expect(circle('2')).toBeUndefined();
    fail('Circle não retorna "undefined" na ausencia de parâmetros');
  });

  test('Verifica se circle retorna um objeto.', () => {
    expect(typeof circle(10)).toBe('object');
    expect(Array.isArray(circle(10))).toBe(false);
    fail('circle não é um objeto');
  });

  test('Verifica se o objeto retornado possui 3 propriedades.', () => {
    expect(Object.keys(circle(10).length)).toBe(3);
    fail('circle não é um objeto');
  });

  test('Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
    fail('Circle não retorna "undefined" na ausencia de parâmetros');
    
  });

  test('Verifica se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.', () => {
    expect(circle(2)).toHavePropety('circunference', 12.56);
    fail('A circunferencia não corresponde ao raio');
  });

  test('Verifica se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.', () => {
    expect(circle(3)).toHavePropety('area', 28.26);
    fail('A area não corresponde ao raio');
  });

  test('Verifica se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.', () => {
    expect(circle(3)).toHavePropety('radius', 3);
    expect(circle(3)).toHavePropety('area', 28.26);
    expect(circle(3)).toHavePropety('circumference', 18.84);
    fail('Os valores de "Circle" não correspondem aos valores de um circulo de raio 3');
  });

});
