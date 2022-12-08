<template>
    
    <h5>Termékek:</h5>
    <div v-for="product in store.purchase.products">
        <ProductView :product="product" :select-product="store.selectProduct" :selected-product="store.selectedProduct"/>
    </div>

    <hr />
    <BillingView :billing="store.purchase.billing" :set-conditions-valid="store.setBillingValidState"/>

    <hr />
    <ConditionsView :conditions="store.purchase.conditions" :set-conditions-valid="store.setConditionsValidState"/>

    <hr />
    <PayView :enabled="store.isValid" :selected-product="store.selectedProduct" />

</template>

<script setup lang="ts">

import ProductView from '../components/ProductView.vue';
import PayView from './PayView.vue';
import ConditionsView from '../components/ConditionsView.vue';
import BillingView from '../components/BillingView.vue';

import { usePurchaseStore } from '../stores/purchase.store';
import { PurchaseService } from '../services/purchase.service';


const purchase = new PurchaseService().Load();
const store = usePurchaseStore();
store.loadState(purchase);
store.selectProduct(purchase.products[0]);

</script>