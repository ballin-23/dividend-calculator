<template>
    <div class="calculation-page-container">
        <div class="calculation-page-top-half-container">
            <Calculator @calculatedReturn="handleCalculatedReturn"/>
            <ReturnTable :calculatedReturn="returnValue"/>   
        </div>
        <div class="calculation-page-bottom-half-container">
            <ReturnGraph/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ReturnTable from '@/components/ReturnTable.vue';
import Calculator from '@/components/Calculator.vue';
import ReturnGraph from '@/components/ReturnGraph.vue';
import { ref } from 'vue';

const returnValue = ref<number>()

const handleCalculatedReturn = (value: number) => {
    returnValue.value = value
    console.log("the returned value is ",returnValue.value)
}
</script>

<style scoped>
.calculation-page-container {
    height: 100vh;
    width: 100%;
    border: 5px solid rgb(0, 255, 98);
    display: flex;
    flex-direction: column;
}
.calculation-page-top-half-container {
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

.calculation-page-bottom-half-container {
    height: 40%;
}
</style>