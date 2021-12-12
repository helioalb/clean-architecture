import Cart from '../../src/domain/entity/Cart';
import Item from '../../src/domain/entity/Item';
import Measure from '../../src/domain/entity/Measure';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';

let cart: Cart;

beforeEach(() => {
    cart = new Cart(new SimpleFreight(1000, 10));
});

test ('Cart creation', () => {
    expect(cart).toBeDefined();
});

test ('total', () => {
    cart.addItem(new Item(1, 'Casa', 'Geladeira', 2000.00, new Measure(200, 100, 50, 40)), 1);
    expect(cart.getTotal()).toBe(2000);
});

test ('freight', () => {
    cart.addItem(new Item(1, 'Casa', 'Geladeira', 2000.00, new Measure(200, 100, 50, 40)), 1);
    expect(cart.getFreight()).toBe(400);
});
