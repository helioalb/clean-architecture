import OrderItem from "./OrderItem";

export default interface Freight {
    calculate(orderItems: Array<OrderItem>): number;
}
