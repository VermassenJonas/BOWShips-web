<script>
	import { mainTabs } from "../lib/NavState.svelte";
</script>

<nav class="navbar navbar-expand-md bg-body-tertiary">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				{#each mainTabs as tab}
					<li class="nav-item">
						<button class="nav-link">{tab.title}</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
