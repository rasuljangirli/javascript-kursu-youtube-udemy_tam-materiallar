//
//todo  API  https://api.frankfurter.app/latest

// https://api.frankfurter.app/latest?amount=10&from=usd&to=try

const amountInput = document.getElementById("amount-input");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertButton = document.getElementById("convert-button");
const rateInfo = document.getElementById("rate-info");
const converted = document.getElementById("converted");

const baseUrl = "https://api.frankfurter.app/latest";

convertButton.addEventListener("click", async () => {
  const amountInputValue = amountInput.value.trim();
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  if (isNaN(amountInputValue) || amountInputValue <= 0) {
    converted.textContent = "Zəhmət olmasa düzgün məlumat daxil edin";
    return;
  }

  const url = `${baseUrl}?amount=${amountInputValue}&from=${fromCurrencyValue}&to=${toCurrencyValue}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    rateInfo.textContent = `1 ${fromCurrencyValue}  -- ${(
      data.rates[toCurrencyValue] / amountInputValue
    ).toFixed(3)} ${toCurrencyValue} edir`;
    converted.textContent = `Nəticə : ${amountInputValue} ${fromCurrencyValue} -- ${data.rates[toCurrencyValue]} ${toCurrencyValue} edir`;
  } catch (error) {
    console.log(error);
  }
});
