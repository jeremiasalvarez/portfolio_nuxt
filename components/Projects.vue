<template>
	<div>
		<TitleDivider
			:width="windowWidth < 768 ? 50 : 30"
			size="5"
			text="Proyectos"
		/>

		<ProjectCarousel :isMobile="windowWidth < 768" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			};
		},
		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize);
			});
		},

		beforeDestroy() {
			window.removeEventListener('resize', this.onResize);
		},

		methods: {
			onResize() {
				this.windowWidth = window.innerWidth;
				this.windowHeight = window.innerHeight;
			}
		}
	};
</script>

<style>
</style>