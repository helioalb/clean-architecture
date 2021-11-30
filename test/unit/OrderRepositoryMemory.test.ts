import Order from "../../src/domain/entity/Order"
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";

test('save and order', () => {
    const orderRepository = new OrderRepositoryMemory();
    const order = new Order('935.411.347-80');
    expect(orderRepository.save(order)).toBeUndefined();
})
