import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";

test('Find item with id 1 on repository', async () => {
    const itemRepository = new ItemRepositoryMemory();
    const item = await itemRepository.findById(1);
    expect(item).toBeDefined();
});
