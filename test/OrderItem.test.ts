import Item from "../src/Item";
import OrderItem from "../src/OrderItem";

test('Creation of OrderItem', () => {
    const item = new Item(1, 'Livro', 5.00);
    const quantity = 2;
    const orderItem = new OrderItem(item, quantity);
    expect(orderItem).toBeDefined();
});

test('Total of OrderItem', () => {
    const item = new Item(1, 'Livro', 5.00);
    const quantity = 2;
    const orderItem = new OrderItem(item, quantity);
    expect(orderItem.getTotal()).toBe(10);
});
