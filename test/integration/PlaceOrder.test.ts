import ItemRepositoryMemory from '../../src/infra/repository/memory/ItemRepositoryMemory';
import OrderRepositoryMemory from '../../src/infra/repository/memory/OrderRepositoryMemory';
import PlaceOrder from '../../src/application/usecase/place_order/PlaceOrder';
import Input from '../../src/application/usecase/place_order/dto/Input';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';
import CouponRepositoryMemory from '../../src/infra/repository/memory/CouponRepositoryMemory';

test('Place an order', async () => {
    const input = new Input(
        '93541134780',
        'DESCONTO10',
        [
            {
                itemId: 1,
                quantity: 1
            },
            {
                itemId: 2,
                quantity: 2
            },
            {
                itemId: 3,
                quantity: 1
            }
        ]
    );

    const placeOrder = new PlaceOrder(new ItemRepositoryMemory(),
                                      new OrderRepositoryMemory(),
                                      new CouponRepositoryMemory(),
                                      new SimpleFreight(1000, 10));
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(4.5);
});
