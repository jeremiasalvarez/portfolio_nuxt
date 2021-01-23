<template>
	<div>
		<div
			v-for="({ name }, index) in skillsArray"
			:key="index"
			class="column is-one-quarter"
		>
			<div
				class="columns is-centered is-vcentered is-variable is-1 is-justify-content-flex-start"
			>
				<div class="column is-narrow">
					<b-icon
						pack="fas"
						icon="arrow-circle-right"
						size="is-small"
						type="is-info"
					>
					</b-icon>
				</div>
				<div class="column is-narrow">
					<p>{{ name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['skillsArray']
	};
</script>

<style>
</style>