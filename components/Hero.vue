<template>
	<section class="hero is-info is-medium">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="is-flex is-justify-content-space-around m-auto">
					<div class="img-container m-auto">
						<b-image
							:src="require('../static/unnamed.png')"
							alt="The Buefy Logo"
							:rounded="rounded"
							class="user-img m-auto"
						></b-image>
					</div>
					<div class="divider is-vertical is-light is-flex-shrink-3">
						<b-icon :type="'is-white'" icon="star" size="is-medium">
						</b-icon>
					</div>
					<div
						class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap is-align-self-center"
					>
						<p class="title m-0 is-size-4-mobile">
							Jeremias Ezequiel Alvarez
						</p>

						<p
							class="is-size-5 is-size-6-mobile mt-2 is-italic has-text-grey-light"
						>
							Software Developer
						</p>
					</div>
				</div>
				<div
					class="hero-buttons is-flex is-justify-content-space-evenly m-auto w50 is-flex-wrap-wrap"
				>
					<b-button
						:class="[
							windowWidth > 768 ? 'mt-6 minw30' : 'mt-2 minw100'
						]"
						class="m-auto"
						type="is-info"
						inverted
						outlined
						>Mas Información</b-button
					>
					<b-button
						:class="[
							windowWidth > 768 ? 'mt-6 minw30' : 'mt-2 minw100'
						]"
						class="m-auto"
						type="is-info"
						inverted
						outlined
						>Contacto</b-button
					>
				</div>
			</div>
		</div>
	</section>
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

<style lang="scss" scoped>
	.user-img {
		width: 100%;
		border-radius: 50%;
	}
	@media (min-width: 768px) {
		.user-img {
			width: 50%;
		}
	}

	.container {
		div {
			width: 90%;
		}
	}

	@media (min-width: 768px) {
		.container {
			div {
				width: 80%;
			}
		}
	}
</style>