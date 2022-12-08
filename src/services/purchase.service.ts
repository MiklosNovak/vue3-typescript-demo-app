import { Billing } from "../models/billing.model";
import { Condition } from "../models/condition.model";
import { Product } from "../models/product.model";
import { Purchase } from "../models/purchase.model";

export class PurchaseService {
        
    Load():Purchase {
    
        const purchase = new Purchase();
        
        purchase.products = [
            new Product("HVG 360 havi", "HVG360", 1700),
            new Product("HVG 360 reklámmentes", "HVG360NOADS", 2300)
        ];
        
        purchase.conditions = [
            new Condition("ASZF elfogadása", false, true),
            new Condition("Játékszabályok elfogadása", false, false)
        ]
        
        purchase.selectedProduct = purchase.products[0];
        purchase.billing = new Billing();

        return purchase;
    }

}