<script lang="ts">
	import {onMount} from "svelte";
	import { enhance } from '$app/forms';
	import type { Job } from "quirrel";

	export let crons: Job<any>[];

	let now = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="cron">

	<div class="now">
		<strong>{now}</strong>
	</div>

	<form method="POST" action="?/add" use:enhance>
		<input type="text" name="id" placeholder="cron id"/>
		<input type="text" name="cron" placeholder="cron value"/>
		<button type="submit" aria-label="Add Cron">
			<svg aria-hidden="true" viewBox="0 0 1 1">
				<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
			</svg>
		</button>
	</form>

	<div class="crons">
		{#if crons && crons.length > 0}
			<h3>Active crons:</h3>
			{#each crons as cron}
				<div class="crons__cron">
					<form method="POST" action="?/delete" use:enhance>
						<button type="submit" aria-label="Delete Cron">
							<svg aria-hidden="true" viewBox="0 0 1 1">
								<path d="M0,0.5 L1,0.5" />
							</svg>
						</button>
						<input type="hidden" name="cronId" value={cron.id}/>
						<span class="crons__cron__value">{`${cron.id}: ${cron.repeat?.cron} ${cron.repeat?.cronTimezone}`}</span>
					</form>
				</div>
			{/each}
		{:else}
			<h3>No active crons</h3>
		{/if}
	</div>

</div>

<style>
	.cron {
		display: flex;
		flex-direction: column;
	}

	.cron > form {
		display: flex;
		flex-direction: row;
	}

	.cron> form > button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.crons__cron > form > button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.crons__cron > form {
		display: flex;
		flex-direction: row;
	}

	.crons__cron > form > button:hover {
		background-color: var(--color-bg-1);
	}

	.cron > form > button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}
</style>
