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
    expect(productDetails('Alcool gel', 'Máscara')).toBe(
      [
        {
          name: 'Alcool gel',
          details: {
            productId: 'Alcool gel123'
          }
        },
        {
          name: 'Máscara',
          details: {
            productId: 'Máscara123'
          }
        }
      ]
    );
  });

  test('Verifica se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  test('Verifica se o retorno da função é um array.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB'))).toBe(true);
  });

  test('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('testProduct', 'testProductB')).toHaveLength(2);
  });

  test('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')[0]).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB')[0])).toBe(false);
    expect(typeof productDetails('testProduct', 'testProductB')[1]).toBe('Object');
    expect(Array.isArray(productDetails('testProduct', 'testProductB')[1])).toBe(false);
  });

  test('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('testProduct', 'testProductB')[0]).not.toMatchObject(productDetails('testProduct', 'testProductB')[1]);
  });

  test('Verifica se os dois productIds terminam com 123.', () => {
    expect(typeof productDetails('testProduct', 'testProductB')).toHaveReturnedWith('testProduct123')
    expect(typeof productDetails('testProduct', 'testProductB')).toLastHaveReturnedWith('testProductB123')
  });

});
