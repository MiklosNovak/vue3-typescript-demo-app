import { Billing } from "./billing.model";
import type { Condition } from "./condition.model";
import type { Product } from "./product.model";


export class Purchase {

    products: Product[] = [];
    conditions: Condition[] = [];
    billing: Billing = new Billing();
    selectedProduct?: Product = undefined;    
}
