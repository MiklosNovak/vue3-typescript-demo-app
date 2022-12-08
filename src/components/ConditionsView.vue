<template>

    <div v-for="cond in conditions">
        <input type="checkbox" v-model="cond.accepted" @change="changeState(cond)" />
        <label @click="changeState(cond)">{{ cond.text }}</label>
        <label v-if="cond.required">*</label>
    </div>

</template>

<script setup lang="ts">

import type { Condition } from '../models/condition.model';

const props = defineProps<{   
    conditions: Condition[];    
    setConditionsValid: (isValid: boolean) => void;
}>();

const changeState = (condition:Condition) => {    
    condition.accepted = !condition.accepted;    
    validate();    
}

const validate = ():void =>
{        
    const isValid = props.conditions.every( el => !el.required || (el.required && el.accepted) );
    props.setConditionsValid(isValid);
}

</script>