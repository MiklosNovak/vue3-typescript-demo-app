<template>

    <div>
        <label>Name</label>
        <input type="text" v-model="billing.name" v-on:blur="validate"/>*           
    </div>

    <div>
        <label>Address</label>
        <input type="text" v-model="billing.address" v-on:blur="validate"/>* 
    </div>

    <div>
        <label>Phone</label>
        <input type="text" v-model="billing.phone" v-on:blur="validate"/>        
    </div>

</template>

<script setup lang="ts">

import type { Billing } from '../models/billing.model';

const props = defineProps<{
    billing: Billing;   
    setConditionsValid: (isValid: boolean) => void; 
}>();

const billing = props.billing;

const validate = ():void =>
{        
     const isValid = billing.name.length>0 && billing.address.length>0;
     props.setConditionsValid(isValid);
}

</script>