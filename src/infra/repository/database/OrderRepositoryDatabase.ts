import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";
import Connection from "../../database/Connection";

export default class OrderRepositoryDatabase implements OrderRepository {
    constructor(readonly connection: Connection) {}

    async save(order: Order): Promise<void> {
        const [orderData] = await this.connection.query('INSERT INTO ccca.order (code, cpf, issue_date, freight, sequence, coupon) VALUES ($1, $2, $3, $4, $5, $6) returning *', [order.getCode(), order.getCpf(), order.issueDate, order.getFreight(), order.sequence, order.coupon?.description]);
        for (const orderItem of order.getOrderItems()) {
            await this.connection.query('INSERT INTO ccca.order_item (id_item, id_order, price, quantity) VALUES ($1, $2, $3, $4)', [orderItem.itemId, orderData.id_order, orderItem.itemPrice, orderItem.quantity]);
        }
    }

    async count(): Promise<number> {
        const [orderDate] = await this.connection.query('SELECT COUNT(*)::int as count from ccca.order', []);
        return orderDate.count;
    }
}
