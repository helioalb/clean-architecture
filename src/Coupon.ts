export default class Coupon {
    private expirationDate?: Date;

    constructor(readonly description: string, readonly discount: number, expirationDate?: Date) {
        this.expirationDate = expirationDate;
    }

    isExpired(today: Date = new Date()): boolean {
        if (!this.expirationDate) return false;
        return today.getTime() > this.expirationDate.getTime();
    }

    calculateDiscount(total: number): number {
        return total * this.discount;
    }
}
