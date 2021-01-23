<template>
	<div class="divider-container m-auto pt-3" :class="`w${width}`">
		<div class="divider is-info">
			<h3
				:class="`is-${size} is-size-${Number(size) + 1}-mobile`"
				class="title"
			>
				{{ text }}
			</h3>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['width', 'text', 'size']
	};
</script>

<style>
</style>