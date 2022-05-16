const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    fail('Teste vazio!');
  });

  test('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
    fail('circle não é uma função');
  });

  test('Verifica se o retorno da função é um array.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB'))).toBeTruthy();
    fail('O retorno da função não é um array.');
  });

  test('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('testProduct', 'testProductB')).toHaveLength(2);
    fail('productDetails não retornou um array com dois itens');
  });

  test('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')[0]).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB')[0])).toBeFalsy();
    expect(typeof productDetails('testProduct', 'testProductB')[1]).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB')[1])).toBeFalsy();
    fail('Os dois itens dentro do array retornado pela função não são objetos.');
  });

  test('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('testProduct', 'testProductB')[0]).not.toMatchObject(productDetails('testProduct', 'testProductB')[1]);
    fail('Os parâmetros retornados pela função não são diferentes entre si');
  });

  test('Verifica se os dois productIds terminam com 123.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')).toHaveReturnedWith('testProduct123')
    expect(typeof productDetails('testProduct', 'testProductB')).toLastHaveReturnedWith('testProductB123')
    fail('ProductsIds NÃO TERMINAM COM 123');
  });
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
});
