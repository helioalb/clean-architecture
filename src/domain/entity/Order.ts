import Code from './Code';
import Coupon from './Coupon';
import CPF from './CPF';
import FreightCalculator from './FreightCalculator';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
    private orderItems: OrderItem[];
    private coupon?: Coupon;
    private issueDate: Date;
    private cpf: CPF;
    private freightCalculator: FreightCalculator;
    private freight: number;
    private code: Code | undefined;

    constructor(cpf: string, freightCalculator: FreightCalculator, issueDate: Date = new Date()) {
        this.cpf = new CPF(cpf);
        this.orderItems = [];
        this.issueDate = issueDate;
        this.freightCalculator = freightCalculator;
        this.freight = 0;
    }

    addItem(item: Item, quantity: number): void {
        this.freight += this.freightCalculator.calculate(item) * quantity;
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

    getFreight(): number {
        return this.freight;
    }

    setCode(code: Code): void {
        if (!!this.code) return;
        this.code = code;
    }

    getCode(): string {
        if (!this.code) return '';
        return this.code.getValue();
    }

    private total(): number {
        return this.orderItems
                    .map(orderItem => orderItem.getTotal())
                    .reduce((semiTotal, sum) => semiTotal + sum, 0);
    }
}
