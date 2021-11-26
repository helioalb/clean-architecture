import Item from "./Item";
import Measure from "./Measure";
import OrderItem from "./OrderItem";

test('Creation of OrderItem', () => {
    const item = new Item(1, 'Livro', 5.00, new Measure(30, 30, 30, 1));
    const quantity = 2;
    const orderItem = new OrderItem(item, quantity);
    expect(orderItem).toBeDefined();
});

test('Total of OrderItem', () => {
    const item = new Item(1, 'Livro', 5.00, new Measure(30, 30, 30, 1));
    const quantity = 2;
    const orderItem = new OrderItem(item, quantity);
    expect(orderItem.getTotal()).toBe(10);
});
