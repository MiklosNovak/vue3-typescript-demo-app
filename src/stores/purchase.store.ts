import { defineStore } from 'pinia';
import { Product } from '../models/product.model';
import { Purchase } from '../models/purchase.model';

export const usePurchaseStore = defineStore('purchase', {
    state: () => (
        { 
            purchase: new Purchase(),
            isConditionsValid: false,
            isBillingValid: false,
            selectedProduct: new Product("", "", 0)            
        }),
    getters: {
        isValid: (state) => state.isBillingValid && state.isConditionsValid,
    },
    actions: {
      loadState(purchase: Purchase) {
        this.purchase = purchase;
      },
      setConditionsValidState(isValid:boolean)
      {
          this.isConditionsValid = isValid;
      },
      setBillingValidState(isValid:boolean)
      {
          this.isBillingValid = isValid;
      },
      selectProduct(product:Product)
      {        
          this.selectedProduct = product;          
      }
    },
  })