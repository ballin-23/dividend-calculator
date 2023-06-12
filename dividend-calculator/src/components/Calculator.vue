<template>
<div class="container">
    <input type="number" v-model="principal" placeholder="Principal">
    <input type="number" v-model="dividendYield" placeholder="Dividend Yield">
    <input type="number" v-model="numberOfYears" placeholder="Number of Years">
    <select v-model="compounded">
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Yearly">Yearly</option>
    </select>
    <button @click="calculateReturn">Calculate</button>
    <div v-if="total">
        <p>the total amount is {{ total }}</p>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
const principal = ref<number>()
const dividendYield = ref<number>()
const numberOfYears = ref<number>()
const total = ref<number>()
let compounded = ref<string>("Monthly")

const emits = defineEmits(['calculatedReturn'])

const handleCompounded = (compounded: string) => {    
    if (compounded === "Monthly") {
        return 12
    } else if (compounded === "Quarterly") {
        return 4
    }
    return 1
}

const calculateReturn = () => {
    if (principal.value && dividendYield.value && numberOfYears.value && compounded.value) {
        // need the local copy to avoid updating the principal amount shown
        let compounded_frequency = handleCompounded(compounded.value)
        let compounded_value = principal.value
        const totalMonths = numberOfYears.value * compounded_frequency
        const monthlyInterestRate = (dividendYield.value / 100)/compounded_frequency
        for (let month = 1; month <= totalMonths; month++) {
            compounded_value *= (1 + monthlyInterestRate);
        }
        total.value = parseFloat(compounded_value.toFixed(2))
        emits('calculatedReturn', total.value)
    }
    else {
        console.log("there is a field that hasn't been filled out properly")
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    background-color: rgb(255, 75, 75);
    padding: 20px;
}
</style>