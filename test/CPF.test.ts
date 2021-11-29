import CPF from '../src/CPF';

test('CPF 111.111.111-11 is invalid', () => {
    expect(new CPF('111.111.111-11').isValid()).toBeFalsy();
});

test('CPF 123.456.789-99 is invalid', () => {
    expect(new CPF('123.456.789-99').isValid()).toBeFalsy();
});

test('CPF 935.411.347-80 is valid', () => {
    expect(new CPF('935.411.347-80').isValid()).toBeTruthy();
});

test('CPF abcdefghij is invalid', () => {
    expect(new CPF('abcdefghij').isValid()).toBeFalsy();
});

test('CPF 935a411b347c80 is invalid', () => {
    expect(new CPF('935a411b347c80').isValid()).toBeFalsy();
});

test('CPF 935 411 347 80 is valid', () => {
    expect(new CPF('935 411 347 80').isValid()).toBeTruthy();
});
