import ItemRepository from '../../../domain/repository/ItemRepository';
import Order from '../../../domain/entity/Order';
import OrderRepository from '../../../domain/repository/OrderRepository';
import PlaceOrderOutput from './PlaceOrderOutput';
import PlaceOrderInput from './PlaceOrderInput';
import FreightCalculator from '../../../domain/entity/FreightCalculator';
import CouponRepository from '../../../domain/repository/CouponRepository';

export default class PlaceOrder {
    constructor(readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository,
        readonly couponRepository: CouponRepository,
        readonly freightCalculator: FreightCalculator) {}

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const sequence = await this.orderRepository.count() + 1;
        const order = new Order(input.cpf, this.freightCalculator, input.date, sequence);
        if (input.coupon) {
            const coupon = await this.couponRepository.findByCode(input.coupon);
            if (coupon) {
                order.addCoupon(coupon);
            }
        }
        for (let orderItem of input.orderItems) {
            const item = await this.itemRepository.findById(orderItem.itemId);
            order.addItem(item, orderItem.quantity);
        }
        this.orderRepository.save(order);
        return new PlaceOrderOutput(order.getCode(), order.totalAmount());
    }
}
