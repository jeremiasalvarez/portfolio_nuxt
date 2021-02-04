<template>
	<footer class="footer">
		<div class="content has-text-centered">
			<div class="columns is-mobile is-centered">
				<ProfileIconsLine
					:isMobile="windowWidth < 768"
					:isFooter="true"
				/>
			</div>
			<p class="has-text-light has-text-weight-bold">
				{{ `${new Date().getUTCFullYear()}` }}
			</p>
		</div>
		<div>
			Iconos diseñados por
			<a href="https://www.freepik.com" title="Freepik">Freepik</a> from
			<a href="https://www.flaticon.es/" title="Flaticon"
				>www.flaticon.es</a
			>
		</div>
	</footer>
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