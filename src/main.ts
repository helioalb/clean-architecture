import SimpleFreight from "./domain/entity/SimpleFreight";
import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import HttpExpressAdapter from "./infra/http/HttpExpressAdapter";
import RouteConfig from "./infra/http/RouteConfig";

const http = new HttpExpressAdapter();
const repositoryFactory = new DatabaseRepositoryFactory();
const freightCalculator = new SimpleFreight(1000, 10);
new RouteConfig(http, repositoryFactory, freightCalculator);
http.listen(3000);
