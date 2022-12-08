<template>
        
    <span> {{ selectedProduct.name }} {{ selectedProduct.price }}</span><br/>
    
    <button :disabled="!props.enabled" >Fizetés</button>    

</template>

<script setup lang="ts">

import type { Product } from '../models/product.model';

const props = defineProps<{
    enabled: boolean;   
    selectedProduct: Product; 
}>();

</script>