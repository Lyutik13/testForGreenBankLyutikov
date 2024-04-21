<script lang="ts">
	export let value: string;
	export let onChange: () => void;
</script>

<select class="selectBtn" bind:value on:change={onChange}>
	<option value="USD">USD</option>
	<option value="EUR">EUR</option>
	<option value="RUB">RUB</option>
</select>
