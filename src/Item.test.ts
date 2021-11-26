import Item from "./Item";
import Measure from "./Measure";

test('Item creation', () => {
    const measure = new Measure(30, 30, 30, 1);
    const item = new Item(1, 'Caderno', 4.99, measure);
    expect(item).toBeDefined();
});

test('item volume', () => {
    const measure = new Measure(20, 15, 10, 1);
    const item = new Item(1, 'Caderno', 4.99, measure);
    expect(item.volume()).toBe(0.003);
});

test('item density', () => {
    const measure = new Measure(20, 15, 10, 1);
    const item = new Item(1, 'Caderno', 4.99, measure);
    expect(item.density()).toBe(333);
});
