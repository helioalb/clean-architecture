import Item from './Item';

export default class OrderItem {
    constructor(readonly itemId: number, readonly itemPrice: number,
        readonly quantity: number) {}

    getTotal(): number {
        return this.itemPrice * this.quantity;
    }
}
