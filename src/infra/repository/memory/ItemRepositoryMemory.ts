import Item from '../../../domain/entity/Item';
import ItemRepository from '../../../domain/repository/ItemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, 'Papelaria', 'Caderno', 2.00),
            new Item(2, 'Papelaria', 'Lapis', 1.00),
            new Item(3, 'Papelaria', 'Borracha', 0.5)
        ]
    }

    async findById(id: number): Promise<Item> {
        const item = this.items.find(item => item.id === id);
        if (!item) throw new Error('Item not found');
        return item;
    }
}
