import Coupon from './Coupon';
import CPF from './CPF';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
    private orderItems: OrderItem[];
    private coupon?: Coupon;
    private issueDate: Date;
    private cpf: CPF;

    constructor(cpf: string, issueDate: Date = new Date()) {
        this.cpf = new CPF(cpf);
        this.orderItems = [];
        this.issueDate = issueDate;
    }

    addItem(item: Item, quantity: number): void {
        this.orderItems.push(new OrderItem(item.id, item.price, quantity));
    }

    addCoupon(coupon: Coupon) {
        if (coupon.isExpired(this.issueDate)) return;
        this.coupon = coupon;
    }

    totalAmount(): number {
        return this.total() - this.discount();
    }

    discount(): number {
        if (!this.coupon) return 0;
        return this.coupon.calculateDiscount(this.total());
    }

    private total(): number {
        return this.orderItems
                    .map(orderItem => orderItem.getTotal())
                    .reduce((semiTotal, sum) => semiTotal + sum, 0);
    }
}
