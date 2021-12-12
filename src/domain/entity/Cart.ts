import FreightCalculator from './FreightCalculator';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Cart {
    private orderItems: OrderItem[];
    private freight: number;
    private freightCalculator: FreightCalculator;

    constructor(freightCalculator: FreightCalculator) {
        this.freightCalculator = freightCalculator;
        this.orderItems = [];
        this.freight = 0;
    }

    addItem(item: Item, quantity: number): void {
        this.freight += this.freightCalculator.calculate(item);
        this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    }

    getTotal(): number {
        return this.orderItems
                    .map(orderItem => orderItem.getTotal())
                    .reduce((semiTotal, sum) => semiTotal + sum, 0);
    }

    getFreight(): number {
        return this.freight;
    }
}
