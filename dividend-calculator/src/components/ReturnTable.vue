<template>
    <div class="return-table-container">
        <div class="return-table-top-value" v-show="calculatedReturnValue">
            Your Total Calculated Return: {{ calculatedReturn }}
        </div>
        <div class="return-table-values" v-show="calculatedReturnValue"> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps({
    calculatedReturn: {
        type: Number
    }
})

const calculatedReturnValue = ref<number>()

watch(() => props.calculatedReturn, (newValue) => {
    calculatedReturnValue.value = newValue
})
</script>

<style scoped>
.return-table-container {
    background: rgb(82, 82, 255);
    height: 100%;
    width: 50%;
}

.return-table-top-value {
    border: 2px solid black;
    height: 50px;
    margin: 20px;
    font-weight: bold;
}

.return-table-values {
    border: 2px solid black;
    height: 500px;
    max-height: 300px;
    margin: 20px;
    font-weight: bold;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>