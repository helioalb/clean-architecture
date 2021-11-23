import Coupon from "./Coupon";

test('Creation of Coupon', () => {
    const coupon = new Coupon('DESCONTO10', 0.1);
    expect(coupon).toBeDefined();
});

test('Coupon expiration', () => {
    const expiresYesterday = new Date();
    expiresYesterday.setDate(expiresYesterday.getDate() - 1)
    const coupon = new Coupon('DESCONTO10', 0.1, expiresYesterday);
    expect(coupon.isExpired()).toBeTruthy();
});

test('Calculate discount', () => {
    const coupon = new Coupon('DESCONTO10', 0.1);
    expect(coupon.calculateDiscount(1000)).toBe(100);
});
