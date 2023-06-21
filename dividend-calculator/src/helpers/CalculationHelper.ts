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
                total += compoundedInterest
                if (month % contributionFrequency == 0) {
                    total += contributionAmount
                }
        }
        return total
    }

    /**
    * gets the number of compounding intervals per year
    * @param {string} frequency: the string representation of the compounding frequency
    * @returns {number} the number of compounding intervals in a year
    */
    public static getCompoundingIntervalsInYear(frequency: string): number {
        if (frequency === "Monthly") {
            return 12
        } else if (frequency === "Quarterly") {
            return 4
        }
        return 1
    }

    /**
    * gets the number of compounding intervals per year
    * @param {string} frequency: the string representation of the contribution frequency
    * @returns {number} the number of time a contribution is made per year
    */
    public static getNumberOfContributions(frequency: string): number {
        if (frequency === "Monthly") {
            return 1
        } else if (frequency === "Quarterly") {
            return 4
        }
        return 12
    }
}