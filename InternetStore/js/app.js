
let btnCart = document.querySelector('.btn-cart');
let modalBasket = document.querySelector('.modal-basket');

btnCart.addEventListener('click', () => {
	modalBasket.classList.toggle('hidden');
});

class ProductList{
	constructor(container='.products'){
		this.container = container;
		this.goods = [];
		this.allProducts = [];//массив товаров c добавлением фото
		this._fetchProducts()
			.then(data => { //data - объект js
				this.goods = [...data];
				this.render()
			});
	}
	_fetchProducts(){
		return fetch('json/catalogData.json')
			.then(result => result.json())
			.catch(error => {
				console.log(error);
			})
	}
	
	render(){
		const block = document.querySelector(this.container);
		for(let product of this.goods){
			const item = new ProductItem(product);
			this.allProducts.push(item);
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
	constructor(product, img = `img/${product.product_name}.jpg`){
		this.product_name = product.product_name;
		this.id_product = product.id_product;
		this.product_price = product.product_price;
		this.img = img;
	}
	render(){
		return `<div class="product-item">
					<img src="${this.img}" alt="photo product">
					<h3>${this.product_name}</h3>
					<p>${this.product_price}&#36;</p>
					<button data-id="${this.id_product}" class="buy-btn">Купить</button>
				</div>`
	}
}

let list = new ProductList();

class CartList {
	constructor(container='.table-body') {
		this.container = container;
		this.goods = [];
		this.summa = 0;
		this.count = 0;
		this._fetchProductsToCard()
			.then(data => {
				this.goods = data.contents;
				this.summa = data.amount;
				this.count = data.result;
				this.render()
				this.cartTotalPrice()
			});
	}

	_fetchProductsToCard(){ // Метод добавления товара в корзину
		return fetch('json/getCart.json')
			.then(result => result.json())
			.catch(error => {
				console.log(error);
			})
	}

	render(){
		const block = document.querySelector(this.container);
		this.goods.forEach(product => {
			const item = new CartItem(product);
			block.insertAdjacentHTML('beforeend', item.renderItem());
		})
	}

	cartTotalPrice() { // Метод расчета общей суммы в корзине
		let sum = this.summa;
		document.querySelector('.summa').textContent = sum;
	}
	removeProductToCard(){} // Удаление товара из корзины
}

class CartItem {
	constructor(product, img = `img/${product.product_name}.jpg`) {
		this.product_name = product.product_name;
		this.id_product = product.id_product;
		this.product_price = product.product_price;
		this.img = img;
		this.count = product.count;
	}
	renderItem(){ // Метод для верстки каждого товара
		return `<tr>
					<th scope="row">${this.id_product}</th>
					<td><img src="${this.img}" alt="photo product"></td>
					<td>${this.product_name}</td>
					<td>${this.product_price}</td>
					<td>${this.count}</td>
					<td><i data-id="${this.id_product}" class="fas fa-trash"></i></td>
				</tr>`;
	}

	btnListenerRemove(){} // Метод для кнопки удаления товара
}

let elem = new CartList;