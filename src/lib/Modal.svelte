<script lang="ts">
	export let modalContent: boolean;
</script>

<div on:click|self class="modal">
	<div class="content">
		<div class="flex justify-end mt-4 mr-4">
			<button on:click>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 hover:text-secondary"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
		<svelte:component this={modalContent} on:click />
	</div>
</div>

<style>
	.modal {
		background-color: rgba(0, 0, 0, 0.4);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		background-color: white;
		width: 40em;
		height: 20em;
	}
</style>
