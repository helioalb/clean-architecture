import PlaceOrder from '../../src/application/usecase/place_order/PlaceOrder';
import PlaceOrderInput from '../../src/application/usecase/place_order/PlaceOrderInput';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';
import PgPromiseConnectionAdapter from '../../src/infra/database/PgPromiseConnectionAdapter';
import ItemRepositoryDatabase from '../../src/infra/repository/database/ItemRepositoryDatabase';
import CouponRepositoryDatabase from '../../src/infra/repository/database/CouponRepositoryDatabase';
import OrderRepositoryDatabase from '../../src/infra/repository/database/OrderRepositoryDatabase';
import DatabaseRepositoryFactory from '../../src/infra/factory/DatabaseRepositoryFactory';

test('Place an order', async () => {
    const input = new PlaceOrderInput('93541134780', 'VALE20',
        [
            { itemId: 1, quantity: 1 },
            { itemId: 2, quantity: 2 },
            { itemId: 3, quantity: 1 }
        ],
        new Date('2021-01-06')
    );

    const repositoryFactory = new DatabaseRepositoryFactory();
    const placeOrder = new PlaceOrder(repositoryFactory, new SimpleFreight(1000, 10));
    const output = await placeOrder.execute(input);
    // expect(output.code).toBe('202100000001');
    expect(output.total).toBe(112);
});
