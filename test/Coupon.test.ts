import Coupon from "../src/Coupon";

test('Creation of Coupon', () => {
    const coupon = new Coupon('DESCONTO10', 0.1);
    expect(coupon).toBeDefined();
});

test('Coupon expired', () => {
    const today = new Date('2020-01-08');
    const expirationDate = new Date('2020-01-06');
    const coupon = new Coupon('DESCONTO10', 0.1, expirationDate);
    expect(coupon.isExpired(today)).toBeTruthy();
});

test('Coupon not expired', () => {
    const today = new Date('2020-01-08');
    const expirationDate = new Date('2020-01-16');
    const coupon = new Coupon('DESCONTO10', 0.1, expirationDate);
    expect(coupon.isExpired(today)).toBeFalsy();
});

test('Calculate discount', () => {
    const coupon = new Coupon('DESCONTO10', 0.1);
    expect(coupon.calculateDiscount(1000)).toBe(100);
});
