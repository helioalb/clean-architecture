import Item from '../../../domain/entity/Item';
import Measure from '../../../domain/entity/Measure';
import ItemRepository from '../../../domain/repository/ItemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, 'Papelaria', 'Caderno', 2.00, new Measure(30, 30, 30, 1)),
            new Item(2, 'Papelaria', 'Lapis', 1.00, new Measure(30, 30, 30, 1)),
            new Item(3, 'Papelaria', 'Borracha', 0.5, new Measure(30, 30, 30, 1)),
            new Item(4, 'Casa', 'Geladeira', 2000.00, new Measure(200, 100, 50, 40))
        ]
    }

    async findById(id: number): Promise<Item> {
        const item = this.items.find(item => item.id === id);
        if (!item) throw new Error('Item not found');
        return item;
    }
}
