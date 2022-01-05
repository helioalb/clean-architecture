import SimulateFreight from "../../application/usecase/simulate_freight/SimulateFreight";
import SimulateFreightInput from "../../application/usecase/simulate_freight/SimulateFreightInput";
import FreightCalculator from "../../domain/entity/FreightCalculator";
import SimpleFreight from "../../domain/entity/SimpleFreight";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import PlaceOrderController from "../controller/PlaceOrderController";
import PgPromiseConnectionAdapter from "../database/PgPromiseConnectionAdapter";
import ItemRepositoryDatabase from "../repository/database/ItemRepositoryDatabase";
import Http from "./Http";

export default class RouteConfig {
    constructor(http: Http, repositoryFactory: RepositoryFactory, freightCalculator: FreightCalculator) {
        http.on('/orders', 'post', async function (params: any, body: any) {
            const placeOrderController = new PlaceOrderController(repositoryFactory, freightCalculator);
            return placeOrderController.execute(params, body);
        });

        http.on('/simulateFreight', 'post', async function (params: any, body: any) {
            const itemRepository = new ItemRepositoryDatabase(PgPromiseConnectionAdapter.getInstance());
            const freightCalculator = new SimpleFreight(1000, 10);
            const simulateFreight = new SimulateFreight(itemRepository, freightCalculator);
            const input = new SimulateFreightInput(body.items);
            return await simulateFreight.execute(input)
        });
    }
}
