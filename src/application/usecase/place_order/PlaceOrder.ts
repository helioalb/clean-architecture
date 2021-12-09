import ItemRepository from '../../../domain/repository/ItemRepository';
import Order from '../../../domain/entity/Order';
import OrderRepository from '../../../domain/repository/OrderRepository';
import Output from './dto/Output';
import Input from './dto/Input';
import FreightCalculator from '../../../domain/entity/FreightCalculator';

export default class PlaceOrder {
    constructor(readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository,
        readonly freightCalculator: FreightCalculator) {}

    async execute(input: Input): Promise<Output> {
        const order = new Order(input.cpf, this.freightCalculator);
        for (let orderItem of input.orderItems) {
            const item = await this.itemRepository.findById(orderItem.itemId);
            order.addItem(item, orderItem.quantity);
        }
        this.orderRepository.save(order);
        return new Output(order.totalAmount());
    }
}
