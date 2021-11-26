import Freight from "./Freight";
import OrderItem from "./OrderItem";

export default class SimpleFreight implements Freight {
    constructor(readonly distanceInKm: number, readonly minimumValue: number) {}

    calculate(orderItems: OrderItem[]): number {
        let total = 0;
        orderItems.forEach(orderItem => {
            total += this.calculateFreightOf(orderItem)
        });
        return total < this.minimumValue ? this.minimumValue : total;
    }

    private calculateFreightOf(orderItem: OrderItem): number {
        const item = orderItem.getItem();
        const oneItem = this.distanceInKm * item.volume() * (item.density() / 100);
        return oneItem * orderItem.getQuantity();
    }
}
