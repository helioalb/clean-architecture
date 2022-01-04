import PgPromiseConnectionAdapter from '../../src/infra/database/PgPromiseConnectionAdapter';

test('Should create a new connection',async () => {
  const connection = PgPromiseConnectionAdapter.getInstance();
  const itemsData = await connection.query('SELECT * FROM ccca.item', []);
  expect(itemsData).toHaveLength(6);
});
