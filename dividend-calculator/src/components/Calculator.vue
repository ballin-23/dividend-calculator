<template>
<div class="container">
    <Input size="large" placeholder="dividend yield" />
    <Input size="large" placeholder="principal amount" />
    <Input size="large" placeholder="monthly payment" />
    <Input size="large" placeholder="years" />
</div>
</template>

<script lang="ts">
export default {
name: 'Calculator',
setup() {
    // assume dividends are paid monthly for now
    const calculateDividendReturn = (amountInvested: number, years: number, dividend: number, recurringInvestment: number) => {
        // get the dividend as a percentage
        const div = dividend / 100
        // A = P (1 + r/n)^(nt)
        const total = amountInvested * (1+(div/12))**(12*years)
        console.log(total)
    }
    calculateDividendReturn(10000,1, 10, 400)
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