import PgPromiseConnectionAdapter from '../../src/infra/database/PgPromiseConnectionAdapter';

test('Should create a new connection',async () => {
  const connection = new PgPromiseConnectionAdapter();
  const itemsData = await connection.query('SELECT * FROM ccca.item', []);
  expect(itemsData).toHaveLength(6);
});
