export default class PlaceOrderInput {
    constructor(readonly cpf: string, readonly coupon: string,
        readonly orderItems: { itemId: number, quantity: number}[],
        readonly date: Date){}
}
