'use strict';
const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit);

const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const totalSumEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');


function caluclateReplenismentDeposite(amount, period) {

    const firstPeriod = 3;
    const secondPeriod = 6;
    const thirdPeriod = 9;
    const fourthPeriod = 12;
    const fifthPeriod = 18;
    const firstPeriodPercent = 2;
    const secondPeriodPercent = 2.2;
    const thirdPeriodPercent = 2.3;
    const fourthPeriodPercent = 2.6;
    const fifthPeriodPercent = 2.7;
    let percent = firstPeriodPercent;
    if (period >= secondPeriod && period < thirdPeriod) {
        percent = secondPeriodPercent;
    } else if (period >= thirdPeriod && period < fourthPeriod) {
        percent = thirdPeriodPercent;
    } else if (period >= fourthPeriod && period < fifthPeriod) {
        percent = fourthPeriodPercent;
    } else if (period >= fifthPeriod) {
        percent = fifthPeriodPercent;
    }

    const monthsInYear = 12;
    const totalSum = amount * Math.pow(1 + percent / (monthsInYear * 100), period);
    const profitSum = totalSum - amount;
    return {
        totalSum: totalSum.toFixed(),
        profitSum: profitSum.toFixed(),
        percent: percent,
    };
}

function handleSubmit(evt) {
    evt.preventDefault();
    totalSumEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';

    const amount = Number(amountInputEl.value);
    const period = Number(periodInputEl.value);

    const result = caluclateReplenismentDeposite(amount, period);

    totalSumEl.textContent = `${result.totalSum}`;
    profitEl.textContent = `${result.profitSum}`;
    percentEl.textContent = `${result.percent}`;

}