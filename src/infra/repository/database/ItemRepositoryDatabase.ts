import Item from '../../../domain/entity/Item';
import Measure from '../../../domain/entity/Measure';
import ItemRepository from '../../../domain/repository/ItemRepository';
import Connection from '../../database/Connection';

export default class ItemRepositoryDatabase implements ItemRepository {
    constructor(readonly connection: Connection) {

    }

    async findById(id: number): Promise<Item | undefined> {
        const [itemData] = await this.connection.query('SELECT * FROM ccca.item WHERE id_item = $1', [id]);
        if (!itemData) return;
        return new Item(itemData.id_item, itemData.category, itemData.description, itemData.price,
            new Measure(itemData.height, itemData.width, itemData.length, itemData.weight));
    }
}
