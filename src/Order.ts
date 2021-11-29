import Coupon from "./Coupon";
import CPF from "./CPF";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    private orderItems: OrderItem[];
    private coupon?: Coupon;
    private issueDate: Date;

    constructor(cpf: CPF, issueDate: Date = new Date()) {
        if (!cpf.isValid()) throw new Error('CPF inválido');
        this.orderItems = [];
        this.issueDate = issueDate;
    }

    addItem(item: Item, quantity: number): void {
        this.orderItems.push(new OrderItem(item, quantity));
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    totalAmount(): number {
        return this.totalAmountWithoutDiscount() - this.discount();
    }

    discount(): number {
        if (!this.coupon) return 0;
        if (this.coupon.isExpired(this.issueDate)) return 0;
        return this.coupon.calculateDiscount(this.totalAmountWithoutDiscount());
    }

    private totalAmountWithoutDiscount(): number {
        return this.orderItems
                    .map(orderItem => orderItem.getTotal())
                    .reduce((semiTotal, sum) => semiTotal + sum, 0);
    }
}
