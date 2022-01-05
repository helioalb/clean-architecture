import PlaceOrder from "../../application/usecase/place_order/PlaceOrder";
import PlaceOrderInput from "../../application/usecase/place_order/PlaceOrderInput";
import FreightCalculator from "../../domain/entity/FreightCalculator";
import SimpleFreight from "../../domain/entity/SimpleFreight";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";

export default class PlaceOrderController {
    constructor (readonly repositoryFactory: RepositoryFactory, readonly freightCalculator: FreightCalculator) {}

    async execute(params: any, body: any) {
        const placeOrder = new PlaceOrder(this.repositoryFactory, this.freightCalculator);
        const { cpf, coupon, orderItems, date } = body
        const input = new PlaceOrderInput(cpf, coupon, orderItems, new Date(date));
        return await placeOrder.execute(input);
    }
}
