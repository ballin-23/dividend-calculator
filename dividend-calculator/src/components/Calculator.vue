<template>

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

</style>