<template>
	<div class="mw100">
		<Navbar />

		<div class="mw100">
			<nuxt />
		</div>

		<Footer />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						title: 'Home',
						icon: 'home',
						to: { name: 'index' }
					},
					{
						title: 'Inspire',
						icon: 'lightbulb',
						to: { name: 'inspire' }
					},
					{
						title: 'Test',
						icon: 'user',
						to: {
							name: 'test'
						}
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped>
</style>
