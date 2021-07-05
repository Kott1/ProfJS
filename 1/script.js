const goods = [
    { title: 'shirt', price: 150 },
    { title: 'socks', price: 50 },
    { title: 'jacket', price: 350 },
    { title: 'shoes', price: 250 },
];


const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><img src="images/${title}.jpg"><p class="price">${price}</p></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join(' ');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();