import { OrderByPipe } from './order-by.pipe';

describe('shared::pipe:OrderByPipe', () => {
  const sut = new OrderByPipe();
  const products = [
    { name: 'C', quantity: 5, price: 300 },
    { name: 'A', quantity: 3, price: 600 },
    { name: 'B', quantity: 1, price: 100 },
  ];

  describe('for descending order', () => {
    it('should sort by name', () => {
        expect(sut.transform(products, 'name')).toEqual([
          { name: 'C', quantity: 5, price: 300 },
          { name: 'B', quantity: 1, price: 100 },
          { name: 'A', quantity: 3, price: 600 },
        ]);
    });

    it('should sort by quantity', () => {
      expect(sut.transform(products, 'quantity')).toEqual([
        { name: 'C', quantity: 5, price: 300 },
        { name: 'A', quantity: 3, price: 600 },
        { name: 'B', quantity: 1, price: 100 },
      ]);
    });

    it('should sort by price', () => {
      expect(sut.transform(products, 'price')).toEqual([
        { name: 'A', quantity: 3, price: 600 },
        { name: 'C', quantity: 5, price: 300 },
        { name: 'B', quantity: 1, price: 100 },
      ]);
    });
  });

  describe('for ascending order', () => {
    it('should sort by name', () => {
      expect(sut.transform(products, 'name', true)).toEqual([
        { name: 'A', quantity: 3, price: 600 },
        { name: 'B', quantity: 1, price: 100 },
        { name: 'C', quantity: 5, price: 300 },
      ]);
    });

    it('should sort by quantity', () => {
      expect(sut.transform(products, 'quantity', true)).toEqual([
        { name: 'B', quantity: 1, price: 100 },
        { name: 'A', quantity: 3, price: 600 },
        { name: 'C', quantity: 5, price: 300 },
      ]);
    });

    it('should sort by price', () => {
      expect(sut.transform(products, 'price', true)).toEqual([
        { name: 'B', quantity: 1, price: 100 },
        { name: 'C', quantity: 5, price: 300 },
        { name: 'A', quantity: 3, price: 600 },
      ]);
    });
  });
});
