<template>
	<div
		class="divider-container"
		:class="`w${width} ${
			text ? 'pt-3 m-auto' : 'pt-0 has-background-info-light'
		}`"
	>
		<div v-if="text" class="divider is-info">
			<h3
				:class="`is-${size} is-size-${Number(size) + 1}-mobile`"
				class="title"
			>
				{{ text }}
			</h3>
		</div>
		<div v-else class="divider is-info m-0">
			<h3
				:class="`is-${size} is-size-${Number(size) + 1}-mobile`"
				class="title"
			>
				<i class="fas fa-star"></i>
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