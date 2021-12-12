import Code from "../../src/domain/entity/Code";

test ('generates code from last register', () => {
    const code = Code.generateFrom(2021, '00000001');
    expect(code.getValue()).toBe('202100000002');
});
