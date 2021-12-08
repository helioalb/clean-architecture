import Order from '../../src/domain/entity/Order'
import SimpleFreight from '../../src/domain/entity/SimpleFreight';
import OrderRepositoryMemory from '../../src/infra/repository/memory/OrderRepositoryMemory';

test('save and order', () => {
    const orderRepository = new OrderRepositoryMemory();
    const freightCalculator = new SimpleFreight(1000, 10);
    const order = new Order('935.411.347-80', freightCalculator);
    expect(orderRepository.save(order)).toBeUndefined();
})
