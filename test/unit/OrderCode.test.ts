import OrderCode from '../../src/domain/entity/OrderCode';

test ('test code generation', () => {
    const date = new Date('2021-01-06');
    const sequence = 1;
    const orderCode = new OrderCode(date, sequence);
    expect(orderCode.value).toBe('202100000001');
});
