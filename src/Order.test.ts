import { isTemplateExpression } from "typescript";
import Coupon from "./Coupon";
import CPF from "./CPF"
import Item from "./Item";
import Order from "./Order";

test('Order with invalid CPF', () => {
    const cpf = new CPF('11111111111');
    expect(() => {
        new Order(cpf);
    }).toThrowError();
});

test('Order with valid CPF', () => {
    const validCPF = new CPF('935.411.347-80');
    const order = new Order(validCPF)
    expect(order).toBeDefined();
});

test('Zero items in Order', () => {
    const validCPF = new CPF('935.411.347-80');
    const order = new Order(validCPF);
    expect(order.totalAmount()).toBe(0);
});

test('Add three items to Order', () => {
    const validCPF = new CPF('935.411.347-80');
    const order = new Order(validCPF);
    order.addItem(new Item(1, 'Caderno', 2.00), 1);
    order.addItem(new Item(2, 'Lapis', 1.00), 2);
    order.addItem(new Item(3, 'Borracha', 0.5), 2);
    expect(order.totalAmount()).toBe(5.00);
});

test('Add discount coupon', () => {
    const validCPF = new CPF('935.411.347-80');
    const order = new Order(validCPF);
    order.addItem(new Item(1, 'Caixa de lapis', 10), 1);
    expect(order.totalAmount()).toBe(10);
    order.addCoupon(new Coupon('DESCONTO10', 0.1));
    expect(order.totalAmount()).toBe(9);
});
