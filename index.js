class SalaryCalculator {
    constructor({dayRate, daysPerWeek, hoursPerDay, publicHolidays, personalHolidays, sickDays, superRate}) {
        this.dayRate = dayRate ? dayRate : 0;
        this.daysPerWeek = daysPerWeek ? daysPerWeek : 5;
        this.hoursPerDay = hoursPerDay ? hoursPerDay : 8;
        this.publicHolidays = publicHolidays ? publicHolidays : 11;
        this.personalHolidays = personalHolidays ? personalHolidays : 20;
        this.sickDays = sickDays ? sickDays : 5;
        this.superRate = superRate ? superRate : 9.5;
    }
    getYearly() {
        return this.getNetYearly() + this.getSuperYearly();
    }
    getMonthly() {
        return this.getYearly() / 12;
    }
    getWeekly() {
        return this.getYearly() / 52;
    }
    getHourly() {
        return (this.dayRate + (this.dayRate / 100 * this.superRate)) / this.hoursPerDay;
    }
    getNetYearly() {
        return this.getPayableDaysPerYear() * this.dayRate;
    }
    getSuperYearly() {
        return this.getNetYearly() / 100 * this.superRate;
    }
    getPayableDaysPerYear() {
        return (this.daysPerWeek * 52) - this.getUnpaidDaysYearly();
    }
    getUnpaidDaysYearly() {
        return this.publicHolidays + this.sickDays + this.personalHolidays;
    }
    report() {
        console.log('---------------------------------------');
        console.log(`Day rate: $${this.dayRate}`);
        console.log(`Days per week: ${this.daysPerWeek}`);
        console.log(`Plus super: ${this.superRate}%`);
        console.log('---');
        console.log(`Yearly: $${Math.round(this.getYearly()).toLocaleString()}`);
        console.log(`Monthly: $${Math.round(this.getMonthly()).toLocaleString()}`);
        console.log(`Weekly: $${Math.round(this.getWeekly()).toLocaleString()}`);
        console.log(`Hourly: $${Math.round(this.getHourly()).toLocaleString()}`);
        console.log('---------------------------------------');
    }
}

const sal = new SalaryCalculator({dayRate:0, daysPerWeek:4.5});
const sal5 = new SalaryCalculator({dayRate:0, daysPerWeek:5});

sal.report();
sal5.report();
