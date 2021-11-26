import Measure from './Measure';

test('Creation of measure', () => {
    const measure = new Measure(20, 15, 10, 1);
    expect(measure).toBeDefined();
});

test('Calculate volume', () => {
    const measure = new Measure(10, 10, 10, 1);
    expect(measure.volume()).toBe(0.001);
});

test('Calculate density', () => {
    const measure = new Measure(20, 15, 10, 1);
    expect(measure.density()).toBe(333);
});
