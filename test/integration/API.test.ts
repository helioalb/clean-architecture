import axios from 'axios';

test ('should test the API /orders', async () => {
    const response = await axios({
        url: 'http://localhost:3000/orders',
        method: 'post',
        data: {
            cpf: '93541134780',
            coupon: 'VALE20',
            orderItems: [
                { itemId: 1, quantity: 1 },
                { itemId: 2, quantity: 2 },
                { itemId: 3, quantity: 1 }
            ],
            date: new Date('2021-01-06')
        }
    });
    const order = response.data;
    expect(order.total).toBe(112);
});

test ('should test the API /simulateFreight', async () => {
    const response = await axios({
        url: 'http://localhost:3000/simulateFreight',
        method: 'post',
        data: {
            items: [
                { idItem: 4, quantity: 1},
                { idItem: 5, quantity: 1},
                { idItem: 6, quantity: 3}
            ]
        }
    });
    const output = response.data;
    expect(output.amount).toBe(260);
});
