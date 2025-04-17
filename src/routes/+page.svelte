<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<h1 class="text-2xl">Cover Letter Writer</h1>
<div class="flex flex-col gap-2 lg:flex-row">
	<form method="POST" use:enhance class="m-5 flex flex-col gap-3 p-5">
		<label for="description">Enter Job Description</label>
		<textarea rows="25" cols="75" name="description" id="description"></textarea>
		<input type="submit" value="Submit" class="rounded bg-slate-500" />
	</form>
	<div>
		{#if data}
			{data}
		{/if}
	</div>
</div>
