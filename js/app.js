'use strict';
const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit);

const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const totalSumEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');
const amountErrEl = document.getElementById('amount-error');
const periodErrEl = document.getElementById('period-error');


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
    amountErrEl.textContent = '';
    periodErrEl.textContent = '';

    const amount = Number(amountInputEl.value);
    const period = Number(periodInputEl.value);
    const minSum = 15000;
    const maxSum = 50000000;
    const minPeriod = 3;
    const maxPeriod = 18;
    if (Number.isNaN(amount)) {
        amountErrEl.textContent = 'Неверное значение. Введите число, например: 15000';
    } else if (amount < minSum) {
        amountErrEl.textContent = `Неверное значение. Минимальная сумма: ${minSum} ₽`;
    } else if (amount > maxSum) {
        amountErrEl.textContent = `Неверное значение. Максимальная сумма: ${maxSum} ₽`;
    }
    if (Number.isNaN(period)) {
        periodErrEl.textContent = 'Неверное значение. Введите число месяцев, например: 3';
    } else if (period < minPeriod) {
        periodErrEl.textContent = `Неверное значение. Минимальный период: ${minPeriod} месяца`;
    } else if (period > maxPeriod) {
        periodErrEl.textContent = `Неверное значение. Максимальный период: ${maxPeriod} месяцев`;
    }

    const result = caluclateReplenismentDeposite(amount, period);

    totalSumEl.textContent = `${result.totalSum}`;
    profitEl.textContent = `${result.profitSum}`;
    percentEl.textContent = `${result.percent}`;

}