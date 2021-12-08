import Item from '../../src/domain/entity/Item';
import Measure from '../../src/domain/entity/Measure';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';

test('creation of simple freight', () => {
    const distance = 1000;
    const minimumValue = 10;
    const freight = new SimpleFreight(distance, minimumValue);
    expect(freight).toBeDefined();
});

test('calcule freight for one items', () => {
    const distance = 1000;
    const minimumValue = 10;
    const freight = new SimpleFreight(distance, minimumValue);
    const item = new Item(1, 'Casa', 'Geladeira', 2.00, new Measure(200, 100, 50, 40));
    expect(freight.calculate(item)).toBe(400);
});

test('use of minimum value', () => {
    const distance = 1000;
    const minimumValue = 500;
    const freight = new SimpleFreight(distance, minimumValue);
    const item = new Item(1, 'Casa', 'Geladeira', 2.00, new Measure(200, 100, 50, 40));
    expect(freight.calculate(item)).toBe(500);
});
