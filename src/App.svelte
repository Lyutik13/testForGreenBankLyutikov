<script lang="ts">
	import { onMount } from "svelte";
	import CurrencySelector from "./components/CurrencySelector.svelte";

	let amountFrom: number = 0;
	let amountTo: number = 0;
	let currencyFrom: string = "USD";
	let currencyTo: string = "RUB";
	let exchangeRate: number = 0;

	// Функция для загрузки текущего курса
	const loadExchangeRate = async () => {
		try {
			const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
			const data = await response.json();
			exchangeRate = data.rates[currencyTo];
		} catch (error) {
			console.error("Ошибка загрузки курса валют:", error);
		}
	};

	// Функции для пересчета конвертации
	const calculateConversionToFrom = () => {
		amountTo = Math.round(amountFrom * exchangeRate * 100) / 100;
	};

	const calculateConversionFromTo = () => {
		amountFrom = Math.round((amountTo / exchangeRate) * 100) / 100;
	};

	onMount(loadExchangeRate);
</script>

<main>
	<h1 class="gradient-text">Конвертер валют</h1>

	<div class="inputWrapper">
		<label>
			Сумма в {currencyFrom}
			<input type="number" bind:value={amountFrom} on:input={calculateConversionToFrom} />
		</label>
		<CurrencySelector bind:value={currencyFrom} onChange={loadExchangeRate} />
	</div>

	<div class="inputWrapper">
		<label>
			Сумма в {currencyTo}
			<input type="number" bind:value={amountTo} on:input={calculateConversionFromTo} />
		</label>
		<CurrencySelector bind:value={currencyTo} onChange={loadExchangeRate} />
	</div>
</main>
