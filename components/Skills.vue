<template>
	<div class="columns is-mobile is-centered is-1 is-variable">
		<div
			class="column is-justify-content-flex-start"
			:class="isMobile ? 'is-10' : 'is-one-quarter'"
		>
			<div
				v-for="({ name }, index) in skillsArray"
				:key="index"
				class="columns is-mobile is-centered is-justify-content-flex-start mb-0"
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
					<p class="has-text-info has-text-weight-semibold is-italic">
						{{ name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['skillsArray', 'isMobile']
	};
</script>

<style>
</style>