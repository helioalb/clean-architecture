import OrderItem from "../../src/domain/entity/OrderItem";

let orderItem: OrderItem;

beforeEach(() => {
    const itemId = 1;
    const itemPrice = 5.00;
    const quantity = 2;
    orderItem = new OrderItem(itemId, itemPrice, quantity);
});

test('Creation of OrderItem', () => {
     expect(orderItem).toBeDefined();
});

test('Total of OrderItem', () => {
    expect(orderItem.getTotal()).toBe(10);
});
