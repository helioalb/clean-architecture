import Item from "./Item";

test('Item creation', () => {
    const item = new Item(1, 'Caderno', 4.99);
    expect(item).toBeDefined();
});
