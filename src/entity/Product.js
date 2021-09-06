
export class Product {
    constructor({ name, img, price, time = 30, subtitle = '', description = '' }) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.time = time;
        this.subtitle = subtitle;
        this.description = description;
    }

    get priceLabel() {
        return `R$ ${this.price},00`;
    }
}