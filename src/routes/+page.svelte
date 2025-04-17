<script lang="ts">
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<h1 class="text-2xl">Cover Letter Writer</h1>
<div class="mx-auto flex max-w-4/5 flex-col gap-2">
	<form method="POST" class="m-5 flex flex-col gap-3 p-5">
		<label for="description">Enter Job Description</label>
		<textarea rows="15" cols="75" name="description" id="description"></textarea>
		<input type="submit" value="Submit" class="rounded bg-slate-500" />
	</form>
	{#if form?.letter}
		<div class="mx-auto w-auto bg-slate-100 p-4">
			<pre class="whitespace-pre-line">{@html form.letter}</pre>
		</div>
	{/if}
</div>

<style>
	think {
		background-color: grey;
	}
</style>
