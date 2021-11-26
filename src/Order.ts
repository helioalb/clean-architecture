import Coupon from "./Coupon";
import CPF from "./CPF";
import Freight from "./Freight";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    private orderItems: Array<OrderItem>;
    private coupon: Coupon | undefined;
    private freightCalculator: Freight | undefined;

    constructor(cpf: CPF, freightCalculator: Freight | undefined = undefined) {
        if (!cpf.isValid()) throw new Error('CPF inválido');
        this.orderItems = [];
        this.freightCalculator = freightCalculator;
    }

    addItem(item: Item, quantity: number): void {
        this.orderItems.push(new OrderItem(item, quantity));
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    totalAmount(): number {
        return this.totalAmountWithoutDiscount() - this.discount() + this.freight();
    }

    discount(): number {
        if (!this.coupon) return 0;
        return this.coupon.calculateDiscount(this.totalAmountWithoutDiscount());
    }

    freight(): number {
        if (!this.freightCalculator) return 0;
        return this.freightCalculator?.calculate(this.orderItems);
    }

    private totalAmountWithoutDiscount(): number {
        return this.orderItems
                    .map(orderItem => orderItem.getTotal())
                    .reduce((semiTotal, sum) => semiTotal + sum, 0);
    }
}
