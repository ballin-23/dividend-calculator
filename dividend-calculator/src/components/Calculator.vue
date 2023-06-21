<template>
<div class="container">
    <div class="container-header">
        Dividend Calculator
    </div>
    <div class="calculator-row">
        principal
        <input type="number" v-model="principal" placeholder="Principal">
    </div>
    <div class="calculator-row">
        Dividend Yield
        <input type="number" v-model="dividendYield" placeholder="Dividend Yield">
    </div>
    <div class="calculator-row">
        Number of Years
        <input type="number" v-model="numberOfYears" placeholder="Number of Years">
    </div>
    <div class="calculator-row">
        Dividend Payout Frequency
        <select v-model="compounded">
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
        </select>
    </div>
    <div class="contribution-container">
        <div class="contribution-container-header">
            Contributions
        </div>
        <div class="calculator-row">
            Contribution Frequency
            <select v-model="contributionFrequency">
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
            </select>
        </div>
        <div class="calculator-row">
            Contribution Amount
            <input type="number" v-model="extraContribution" placeholder="Amount">
        </div>
    </div>
    <button @click="calculateReturn">Calculate</button>
    <div v-if="total">
        <p>the total amount is {{ total }}</p>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { CalculationHelper } from '@/helpers/CalculationHelper'
const principal = ref<number>(1000)
const dividendYield = ref<number>(10)
const numberOfYears = ref<number>(1)
const total = ref<number>()
const compounded = ref<string>("Monthly")
const contributionFrequency = ref<string>("Monthly")
const extraContribution = ref<number>(100)

const emits = defineEmits(['calculatedReturn'])

const calculateReturn = () => {
    if (principal.value && dividendYield.value && numberOfYears.value && compounded.value) {
        let extra = 0
        if (contributionFrequency.value !== "" && extraContribution.value !== 0 && extraContribution.value != undefined) {
            extra = extraContribution.value
        }
        // need the local copy to avoid updating the principal amount shown
        let paymentFrequency = CalculationHelper.getNumberOfContributions(contributionFrequency.value)
        let compounded_frequency = CalculationHelper.getCompoundingIntervalsInYear(compounded.value)
        total.value = CalculationHelper.CalculateReturn(principal.value, numberOfYears.value, dividendYield.value, compounded_frequency, paymentFrequency, extra)
        total.value = parseFloat(total.value.toFixed(2))
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

.contribution-container {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
}

.contribution-container-header {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

.calculator-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid black;
}
</style>