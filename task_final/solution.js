
function sendRequest(name, phone, address, goods, sum) {
   

    let data = {client: `${name} ${phone}`,  order: {}, goods: []};

    let countOfGoods = goods.length;
    for (let i = 0; i < countOfGoods; i += 1) {
        let GoodsList = {
            title : goods[i].title,
            count : goods[i].count,
        }
        data.goods.push(GoodsList);
    };
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`;
   
    data.order.sum = sum;

    let jsonData = JSON.stringify({data});
    return jsonData;
}