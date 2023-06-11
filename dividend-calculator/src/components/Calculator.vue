<template>
<div class="container">
    <input type="number" v-model="principal" placeholder="Principal">
    <input type="number" v-model="dividendYield" placeholder="Dividend Yield">
    <input type="number" v-model="numberOfYears" placeholder="Number of Years">
    <button @click="calculateReturn">Calculate</button>
    <div v-if="total">
        <p>the total amount is {{ total }}</p>
    </div>
</div>
</template>

<script lang="ts">import { ref } from 'vue'

export default {
name: 'Calculator',
setup() {
    const principal = ref<number>()
    const dividendYield = ref<number>()
    const numberOfYears = ref<number>()
    const payOut = ref(0)
    let total = ref<number>()

    const calculateReturn = () => {
        if (principal.value && dividendYield.value && numberOfYears.value) {
            // need the local copy to avoid updating the principal amount shown
            let compounded_value = principal.value
            const totalMonths = numberOfYears.value * 12
            const monthlyInterestRate = (dividendYield.value / 100)/12
            for (let month = 1; month <= totalMonths; month++) {
                compounded_value *= (1 + monthlyInterestRate);
            }
            total.value = parseFloat(compounded_value.toFixed(2))
        }
        else {
            console.log("there is a field that hasn't been filled out properly")
        }
    }
    return {dividendYield, numberOfYears, payOut,principal, calculateReturn, total}
}
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    background-color: rgb(197, 56, 56);
    padding: 20px;
}
</style>