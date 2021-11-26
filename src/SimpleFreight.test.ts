import Item from "./Item";
import Measure from "./Measure";
import OrderItem from "./OrderItem";
import SimpleFreight from "./SimpleFreight";

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
    const item = new Item(1, 'Geladeira', 2.00, new Measure(200, 100, 50, 40));
    const orderItem = new OrderItem(item, 1);
    const orderItems = [orderItem];
    expect(freight.calculate(orderItems)).toBe(400);
});

test('use of minimum value', () => {
    const distance = 1000;
    const minimumValue = 500;
    const freight = new SimpleFreight(distance, minimumValue);
    const item = new Item(1, 'Geladeira', 2.00, new Measure(200, 100, 50, 40));
    const orderItem = new OrderItem(item, 1);
    const orderItems = [orderItem];
    expect(freight.calculate(orderItems)).toBe(500);
});
