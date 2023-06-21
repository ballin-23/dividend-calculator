export class CalculationHelper {
    /**
    * Calculates the total return of an investment
    * @param {number} principal: the initial investment amount
    * @param {number} years: the initial investment amount
    * @param {number} dividend: the initial investment amount
    * @param {number} dividendFrequency: the initial investment amount
    * @param {number} contributionFrequency: the initial investment amount
    * @param {number} contributionAmount: the initial investment amount
    * @returns {number} the total value after the specified number of years
    */
    public static CalculateReturn(principal: number, years: number, dividend: number, dividendFrequency: number, contributionFrequency: number, contributionAmount: number): number {
        let total = principal
        const totalMonths = years * dividendFrequency
        const interestRate = (dividend / 100)/dividendFrequency
        for (let month = 1; month <= totalMonths; month++) {
                let compoundedInterest = total * interestRate
                total += compoundedInterest + contributionAmount
                console.log(total, compoundedInterest, contributionAmount)
        }
        return total
    }

    public static getCompoundingIntervalsInYear(frequency: string) {
        if (frequency === "Monthly") {
            return 12
        } else if (frequency === "Quarterly") {
            return 4
        }
        return 1
    }

    public static getNumberOfContributions(frequency: string) {
        if (frequency === "Monthly") {
            return 1
        } else if (frequency === "Quarterly") {
            return 4
        }
        return 12
    }
}