import ItemRepositoryMemory from '../../src/infra/repository/memory/ItemRepositoryMemory';
import OrderRepositoryMemory from '../../src/infra/repository/memory/OrderRepositoryMemory';
import PlaceOrder from '../../src/application/usecase/place_order/PlaceOrder';
import PlaceOrderInput from '../../src/application/usecase/place_order/PlaceOrderInput';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';
import CouponRepositoryMemory from '../../src/infra/repository/memory/CouponRepositoryMemory';
import PgPromiseConnectionAdapter from '../../src/infra/database/PgPromiseConnectionAdapter';
import ItemRepositoryDatabase from '../../src/infra/repository/database/ItemRepositoryDatabase';

test('Place an order', async () => {
    const connection = new PgPromiseConnectionAdapter();
    const input = new PlaceOrderInput('93541134780', 'DESCONTO10',
        [
            { itemId: 1, quantity: 1 },
            { itemId: 2, quantity: 2 },
            { itemId: 3, quantity: 1 }
        ],
        new Date('2021-01-06')
    );

    const placeOrder = new PlaceOrder(new ItemRepositoryDatabase(connection),
                                      new OrderRepositoryMemory(),
                                      new CouponRepositoryMemory(),
                                      new SimpleFreight(1000, 10));
    const output = await placeOrder.execute(input);
    expect(output.code).toBe('202100000001');
    expect(output.total).toBe(140);
});
