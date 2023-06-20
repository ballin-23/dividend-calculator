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
const principal = ref<number>()
const dividendYield = ref<number>()
const numberOfYears = ref<number>()
const total = ref<number>()
const compounded = ref<string>("Monthly")
const contributionFrequency = ref<string>("")
const extraContribution = ref<number>()

const emits = defineEmits(['calculatedReturn'])

const handleCompounded = (compounded: string) => {    
    if (compounded === "Monthly") {
        return 12
    } else if (compounded === "Quarterly") {
        return 4
    }
    return 1
}

const handleContribution = (contribution: string) => {
    if (contribution === "Monthly") {
        return 12
    } else if (contribution === "Quarterly") {
        return 4
    }
    return 1
}

const calculateReturn = () => {
    if (principal.value && dividendYield.value && numberOfYears.value && compounded.value) {
        let extra = 0
        if (contributionFrequency.value !== "" && extraContribution.value !== 0 && extraContribution.value != undefined) {
            extra = extraContribution.value
        }
        // need the local copy to avoid updating the principal amount shown
        let compounded_frequency = handleCompounded(compounded.value)
        let compounded_value = principal.value
        const totalMonths = numberOfYears.value * compounded_frequency
        const monthlyInterestRate = (dividendYield.value / 100)/compounded_frequency
        for (let month = 1; month <= totalMonths; month++) {
            let compoundedInterest = compounded_value * monthlyInterestRate
            compounded_value += compoundedInterest + extra
            console.log(compounded_value, compoundedInterest, extra)
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