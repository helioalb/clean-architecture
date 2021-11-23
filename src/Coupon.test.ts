import Coupon from "./Coupon";

test('Creation of Coupon', () => {
    const coupon = new Coupon('DESCONTO10', 0.1);
    expect(coupon).toBeDefined();
});
