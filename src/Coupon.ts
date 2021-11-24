export default class Coupon {
    private expiresAt: Date | undefined;

    constructor(readonly description: string, readonly discount: number,
        expiresAt: Date | undefined = undefined) {
        this.expiresAt = expiresAt;
    }

    isExpired(): boolean {
        if (!this.expiresAt) return false;
        const today = new Date();
        return today.getTime() > this.expiresAt.getTime();
    }

    calculateDiscount(total: number): number {
        if (this.isExpired()) return total;
        return total * this.discount;
    }
}
