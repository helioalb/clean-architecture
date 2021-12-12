import Input from '../../src/application/usecase/freight_simulation/dto/Imput';
import FreightSimulation from '../../src/application/usecase/freight_simulation/FreightSimulation';
import SimpleFreight from '../../src/domain/entity/SimpleFreight';
import ItemRepositoryMemory from '../../src/infra/repository/memory/ItemRepositoryMemory';

test('Freight simulation', async () => {
    const input = new Input([{
        id: 4,
        quantity: 1
    }]);
    const freightSimulation = new FreightSimulation(new ItemRepositoryMemory(), new SimpleFreight(1000, 10))
    const output = await freightSimulation.execute(input);
    expect(output.total).toBe(2000);
    expect(output.freight).toBe(400);
});
