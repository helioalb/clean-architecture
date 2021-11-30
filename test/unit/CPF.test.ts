import CPF from '../../src/domain/entity/CPF';

test('CPF 111.111.111-11 is invalid', () => {
    expect(() => new CPF('111.111.111-11')).toThrowError();
});

test('CPF 123.456.789-99 is invalid', () => {
    expect(() => new CPF('123.456.789-99')).toThrowError();
});

test('CPF 935.411.347-80 is valid', () => {
    expect(new CPF('935.411.347-80')).toBeDefined;
});

test('CPF abcdefghij is invalid', () => {
    expect(() => new CPF('abcdefghij')).toThrowError();
});

test('CPF 935a411b347c80 is invalid', () => {
    expect(() => new CPF('935a411b347c80')).toThrowError();
});

test('CPF 935 411 347 80 is valid', () => {
    expect(new CPF('935 411 347 80')).toBeDefined();
});
