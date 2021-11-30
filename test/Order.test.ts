import Coupon from "../src/Coupon";
import CPF from "../src/CPF"
import Item from "../src/Item";
import Order from "../src/Order";

let order: Order;

beforeEach(() => {
    const validCPF = '935.411.347-80';
    const issueDate = new Date('2020-01-15');
    order = new Order(validCPF, issueDate);
});

test('Order with invalid CPF', () => {
    const invalidCPF = '11111111111';
    expect(() => {
        new Order(invalidCPF);
    }).toThrowError();
});

test('Order with valid CPF', () => {
    expect(order).toBeDefined();
});

test('Zero items in Order', () => {
    expect(order.totalAmount()).toBe(0);
});

test('Add three items to Order', () => {
    order.addItem(new Item(1, 'Papelaria', 'Caderno', 2.00), 1);
    order.addItem(new Item(2, 'Papelaria', 'Lapis', 1.00), 2);
    order.addItem(new Item(3, 'Papelaria', 'Borracha', 0.5), 2);
    expect(order.totalAmount()).toBe(5.00);
});

test('Add discount coupon', () => {
    order.addItem(new Item(1,  'Papelaria', 'Caixa de lapis', 10), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10));
    expect(order.totalAmount()).toBe(9);
});

test('Doesnt apply expired coupon', () => {
    const couponExpirationDate = new Date('2020-01-01');
    order.addItem(new Item(1, 'Papelaria', 'Caixa de lapis', 10), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10, couponExpirationDate));
    expect(order.totalAmount()).toBe(10);
});

test('Apply coupon when it is not expired', () => {
    const couponExpirationDate = new Date('2020-01-15');
    order.addItem(new Item(1, 'Papelaria', 'Caixa de lapis', 10), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10, couponExpirationDate));
    expect(order.totalAmount()).toBe(9);
});
