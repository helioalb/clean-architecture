import Item from '../../../domain/entity/Item';
import Measure from '../../../domain/entity/Measure';
import ItemRepository from '../../../domain/repository/ItemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, 'Música', 'CD', 30.00, new Measure(30, 30, 10, 1)),
            new Item(2, 'Vídeo', 'DVD', 50.00, new Measure(20, 40, 10, 1)),
            new Item(3, 'Vídeo', 'VHS', 10.00, new Measure(20, 40, 10, 1))
        ]
    }

    async findById(id: number): Promise<Item> {
        const item = this.items.find(item => item.id === id);
        if (!item) throw new Error('Item not found');
        return item;
    }
}
