import Cart from '../../../domain/entity/Cart';
import FreightCalculator from '../../../domain/entity/FreightCalculator';
import ItemRepository from '../../../domain/repository/ItemRepository';
import Input from './dto/Imput';
import Output from './dto/Output';

export default class FreightSimulation {
    constructor(readonly itemRepository: ItemRepository,
        readonly freightCalculator: FreightCalculator) { }

    async execute(input: Input): Promise<Output> {
        const cart = new Cart(this.freightCalculator)
        for (let i of input.items) {
            const item = await this.itemRepository.findById(i.id);
            cart.addItem(item, i.quantity);
        }
        return new Output(cart.getTotal(), cart.getFreight());
    }
}
