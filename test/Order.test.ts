import Coupon from "../src/Coupon";
import CPF from "../src/CPF"
import Item from "../src/Item";
import Order from "../src/Order";

test('Order with invalid CPF', () => {
    const invalidCPF = '11111111111';
    expect(() => {
        new Order(invalidCPF);
    }).toThrowError();
});

test('Order with valid CPF', () => {
    const validCPF = '935.411.347-80';
    const order = new Order(validCPF)
    expect(order).toBeDefined();
});

test('Zero items in Order', () => {
    const validCPF = '935.411.347-80';
    const order = new Order(validCPF);
    expect(order.totalAmount()).toBe(0);
});

test('Add three items to Order', () => {
    const validCPF = '935.411.347-80';
    const order = new Order(validCPF);
    order.addItem(new Item(1, 'Caderno', 2.00), 1);
    order.addItem(new Item(2, 'Lapis', 1.00), 2);
    order.addItem(new Item(3, 'Borracha', 0.5), 2);
    expect(order.totalAmount()).toBe(5.00);
});

test('Add discount coupon', () => {
    const validCPF = '935.411.347-80';
    const order = new Order(validCPF);
    order.addItem(new Item(1, 'Caixa de lapis', 10), 1);
    expect(order.totalAmount()).toBe(10);
    order.addCoupon(new Coupon('DESCONTO10', 0.1));
    expect(order.totalAmount()).toBe(9);
});

test('Doesnt apply expired coupon', () => {
    const validCPF = '935.411.347-80';
    const issueDate = new Date('2020-01-15')
    const order = new Order(validCPF, issueDate);
    order.addItem(new Item(1, 'Caixa de lapis', 10), 1);
    expect(order.totalAmount()).toBe(10);
    const couponExpirationDate = new Date('2020-01-01');
    order.addCoupon(new Coupon('DESCONTO10', 0.1, couponExpirationDate));
    expect(order.totalAmount()).toBe(10);
});

test('Apply coupon when it is not expired', () => {
    const validCPF = '935.411.347-80';
    const issueDate = new Date('2020-01-01')
    const order = new Order(validCPF, issueDate);
    order.addItem(new Item(1, 'Caixa de lapis', 10), 1);
    expect(order.totalAmount()).toBe(10);
    const couponExpirationDate = new Date('2020-01-15');
    order.addCoupon(new Coupon('DESCONTO10', 0.1, couponExpirationDate));
    expect(order.totalAmount()).toBe(9);
});
