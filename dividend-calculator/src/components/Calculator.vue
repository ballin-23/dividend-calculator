<template>
<div class="container">
    <input type="number" v-model="principal" placeholder="Principal">
    <input type="number" v-model="dividendYield" placeholder="Dividend Yield">
    <input type="number" v-model="numberOfYears" placeholder="Number of Years">
    <button @click="calculateReturn">Calculate</button>
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

    const calculateReturn = () => {
        if (principal.value && dividendYield.value && numberOfYears.value) {
            const totalMonths = numberOfYears.value * 12
            const monthlyInterestRate = (dividendYield.value / 100)/12
            for (let month = 1; month <= totalMonths; month++) {
                principal.value *= (1 + monthlyInterestRate);
                console.log(principal.value)
            }
        }
        else {
            console.log("there is a field that hasn't been filled out properly")
        }
    }
    return {dividendYield, numberOfYears, payOut,principal, calculateReturn}
}
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    background-color: black;
    padding: 20px;
}
</style>