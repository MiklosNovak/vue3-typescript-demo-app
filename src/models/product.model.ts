export class Product {

    readonly name: string;
    readonly sku: string;
    readonly price: number;

    constructor(name: string, sku: string, price: number) {
        this.name = name;
        this.sku = sku;
        this.price = price;
    }
}
