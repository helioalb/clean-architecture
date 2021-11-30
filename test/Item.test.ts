import Item from "../src/Item";

test('Item creation', () => {
    const item = new Item(1, 'Papelaria', 'Caderno', 4.99);
    expect(item).toBeDefined();
});
