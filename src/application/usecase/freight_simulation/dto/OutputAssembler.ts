import Cart from '../../../../domain/entity/Cart';
import Output from './Output';

export default class OutputAssembler {
    static assembly(cart: Cart): Output {
        return new Output(cart.getTotal(), cart.getFreight());
    }
}
