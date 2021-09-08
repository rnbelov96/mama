/* eslint-disable no-param-reassign */
export {};

const leftColor = '#01b1fd';
const rightColor = '#d5efff';

const rangeElList = document.querySelectorAll('.js-range');

const flourRange = document.querySelector(
  '.js-flour-range',
) as HTMLInputElement;
const meatRange = document.querySelector(
  '.js-meat-range',
) as HTMLInputElement;
const dopRange = document.querySelector('.js-dop-range') as HTMLInputElement;

const flourRangeValueLabel = document.querySelector(
  '.js-flour-value',
) as HTMLSpanElement;
const meatRangeValueLabel = document.querySelector(
  '.js-meat-value',
) as HTMLSpanElement;
const dopRangeValueLabel = document.querySelector(
  '.js-dop-value',
) as HTMLSpanElement;

const multiplierList = [0.16, 0.3];
const tabElList = document.querySelectorAll('.calc__tab');
let currentTab = 0;

const resultLabelEl = document.querySelector('.js-calc-result') as HTMLSpanElement;

let result: number;

let singleCurrentStep = 2;
let litleCurrentStep = 2;
let bigCurrentStep = 2;

const calcResult = () => {
  result = (Number(flourRange.value) * 700
      + Number(meatRange.value) * 700
      + Number(dopRange.value) * 100)
    * multiplierList[currentTab];
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

tabElList.forEach(tab => {
  tab.addEventListener('click', (e: Event) => {
    const clickedTab = e.currentTarget as HTMLParagraphElement;
    if (clickedTab.classList.contains('calc__tab_active')) {
      return;
    }

    tabElList[currentTab].classList.remove('calc__tab_active');
    currentTab = currentTab === 0 ? 1 : 0;
    tabElList[currentTab].classList.add('calc__tab_active');

    calcResult();
  });
});

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

flourRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  flourRangeValueLabel.textContent = rangeEl.value;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  singleCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (singleCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (singleCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

meatRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  meatRangeValueLabel.textContent = rangeEl.value;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  litleCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (litleCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (litleCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

dopRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  dopRangeValueLabel.textContent = rangeEl.value;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  bigCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (bigCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (bigCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
