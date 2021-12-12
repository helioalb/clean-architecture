import Code from '../../../domain/entity/Code';
import Order from '../../../domain/entity/Order';
import OrderRepository from '../../../domain/repository/OrderRepository';

export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[];

    constructor() {
        this.orders = [];
    }

    save(order: Order): void {
        order.setCode(this.createCode());
        this.orders.push(order);
    }

    last(): Order {
        return this.orders[this.orders.length - 1];
    }

    private createCode(): Code {
        let lastCode: string = '00000000';
        const lastOrder = this.last();
        if (lastOrder) {
            lastCode = lastOrder.getCode().slice(4);
        }
        return Code.generateFrom(new Date().getFullYear(), lastCode);
    }
}
