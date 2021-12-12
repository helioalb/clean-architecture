import Coupon from '../../../domain/entity/Coupon';
import CouponRepository from '../../../domain/repository/CouponRepository';

export default class CouponRepositoryMemory implements CouponRepository {
    private coupons: Coupon[];

    constructor() {
        this.coupons = [
            new Coupon('DESCONTO10', 10, new Date('2020-01-15'))
        ]
    }

    findByCode(code: string): Promise<Coupon | undefined> {
        return Promise.resolve(this.coupons.find(coupon => coupon.description == code));
    }
}
