<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="main m-10">
	{@render children()}
</div>
