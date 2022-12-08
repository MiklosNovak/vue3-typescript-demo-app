<template>
    <div @click="productClick" >                
        <span v-if="!isSelected">{{ product.name }}</span>
        <span v-if="isSelected"><b>{{ product.name }}</b></span>
    </div>

</template>

<script setup lang="ts">

import { computed } from 'vue';
import type { Product } from '../models/product.model';

const props = defineProps<{
    product: Product;    
    selectedProduct: Product;
    selectProduct: (product:Product) => void;
}>();
   
const isSelected = computed<boolean>(() => props.product.sku == props.selectedProduct.sku);

const productClick = () =>
{    
    props.selectProduct(props.product);
}

</script>