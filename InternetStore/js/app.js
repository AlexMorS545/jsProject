class ProductList{
	constructor(container='.products'){
		this.container = container;
		this.goods = [];
		//this.allProducts = [];//массив товаров c добавлением фото
		this._fetchProducts();
		this.render();//вывод товаров на страницу
	}
	_fetchProducts(){
		this.goods = [
			{id: 1, title: 'Notebook', price: 2000},
			{id: 2, title: 'Mouse', price: 20},
			{id: 3, title: 'Keyboard', price: 200},
			{id: 4, title: 'Gamepad', price: 50},
		];
	}
	
	render(){
		const block = document.querySelector(this.container);
		for(let product of this.goods){
			const item = new ProductItem(product);
			//this.allProducts.push(item);
			block.insertAdjacentHTML("beforeend",item.render());
		}
	}

	totalSum() {
		let sum=0;
		this.goods.forEach(item => sum += item.price);
		return sum;
	}
}

class ProductItem{
	constructor(product, img = `img/${product.title}.jpg`){
		this.title = product.title;
		this.id = product.id;
		this.price = product.price;
		this.img = img;
	}
	render(){
		return `<div class="product-item">
					<img src="${this.img}">
					<h3>${this.title}</h3>
					<p>${this.price}</p>
					<button class="buy-btn">Купить</button>
				</div>`
	}
}

let list = new ProductList();
console.log(list.totalSum());

class CartList {
	constructor() {
	}
	renderProductToCard(){} // Метод добавления товара в корзину
	
	cartTotalPrice(){} // Метод расчета общей суммы в корзине

	removeProductToCard(){} // Удаление товара из корзины
}

class CartItem {
	constructor() {
	}
	renderItem(){} // Метод для верстки каждого товара

	btnListenerRemove(){} // Метод для кнопки удаления товара
}

/* const products = [
	{id: 1, title: 'Notebook', price: 2000},
	{id: 2, title: 'Mouse', price: 20},
	{id: 3, title: 'Keyboard', price: 200},
	{id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item) => {
	return `<div class="product-item">
				<img src="img/${item.title}.jpg" alt="photo product">
				<h3>${item.title}</h3>
				<p class = "price">${item.price}&#36;</p>
				<button class="buy-btn">Купить</button>
			</div>`
};
const renderPage = list => {
	document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderPage(products); */