import Coupon from '../../src/domain/entity/Coupon';
import FreightCalculator from '../../src/domain/entity/FreightCalculator';
import Item from '../../src/domain/entity/Item';
import Measure from '../../src/domain/entity/Measure';
import Order from '../../src/domain/entity/Order';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';

let order: Order;
let freightCalculator: FreightCalculator;

beforeEach(() => {
    const validCPF = '935.411.347-80';
    const issueDate = new Date('2020-01-15');
    freightCalculator = new SimpleFreight(1000, 10);
    const sequence = 1;
    order = new Order(validCPF, freightCalculator, issueDate, sequence);
});

test('Order with invalid CPF', () => {
    const invalidCPF = '11111111111';
    expect(() => {
        new Order(invalidCPF, freightCalculator);
    }).toThrowError();
});

test('Order with valid CPF', () => {
    expect(order).toBeDefined();
});

test('Zero items in Order', () => {
    expect(order.totalAmount()).toBe(0);
});

test('Add three items to Order', () => {
    order.addItem(new Item(1, 'Papelaria', 'Caderno', 2.00, new Measure(30, 30, 30, 1)), 1);
    order.addItem(new Item(2, 'Papelaria', 'Lapis', 1.00, new Measure(30, 30, 30, 1)), 2);
    order.addItem(new Item(3, 'Papelaria', 'Borracha', 0.5, new Measure(30, 30, 30, 1)), 2);
    expect(order.totalAmount()).toBe(5.00);
});

test('Add discount coupon', () => {
    order.addItem(new Item(1,  'Papelaria', 'Caixa de lapis', 10, new Measure(30, 30, 30, 1)), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10));
    expect(order.totalAmount()).toBe(9);
});

test('Doesnt apply expired coupon', () => {
    const couponExpirationDate = new Date('2020-01-01');
    order.addItem(new Item(1, 'Papelaria', 'Caixa de lapis', 10, new Measure(30, 30, 30, 1)), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10, couponExpirationDate));
    expect(order.totalAmount()).toBe(10);
});

test('Apply coupon when it is not expired', () => {
    const couponExpirationDate = new Date('2020-01-15');
    order.addItem(new Item(1, 'Papelaria', 'Caixa de lapis', 10, new Measure(30, 30, 30, 1)), 1);
    order.addCoupon(new Coupon('DESCONTO10', 10, couponExpirationDate));
    expect(order.totalAmount()).toBe(9);
});

test('Order with freight', () => {
    order.addItem(new Item(1, 'Casa', 'Geladeira', 2000.00, new Measure(200, 100, 50, 40)), 1);
    expect(order.getFreight()).toBe(400);
});

test ('order code', () => {
    expect(order.getCode()).toBe('202000000001');
});
