<template>
	<div class="container has-text-centered mt-5">
		<!-- <div
			class="level is-justify-content-center"
			:class="[windowWidth >= 768 ? 'w80' : 'w90']"
		> -->
		<!-- Left side -->
		<!-- <div class="level-left is-align-items-center w30">
				<div
					class="level-item img-container m-auto"
					:class="[windowWidth >= 768 ? 'pr-5 mr-1' : '']"
				> -->
		<!-- <b-image
						:src="require('../static/unnamed.png')"
						alt="The Buefy Logo"
						:rounded="rounded"
						class="user-img-mini m-auto"
					></b-image>
				</div>
			</div>

			 Right side -->
		<!-- <div class="level-right">
				<h4 class="level-item"><strong>Ubicacion</strong></h4>
			</div> -->
		<!-- </div> -->
		<div
			class="columns is-vcentered m-auto is-gapless"
			:class="[windowWidth >= 768 ? 'w80' : 'w90']"
		>
			<div class="column">
				<div
					class="level-item img-container m-auto w50"
					:class="[windowWidth >= 768 ? 'pr-5 mr-1' : '']"
				>
					<b-image
						:src="require('../static/unnamed.png')"
						alt="The Buefy Logo"
						:rounded="rounded"
						class="user-img-mini m-auto"
					></b-image>
				</div>
			</div>
			<div
				class="column is-align-items-baseline"
				:class="{ 'mt-3': windowWidth <= 768 }"
			>
				<div
					class="line"
					:class="[windowWidth >= 768 ? 'w30' : 'w50 m-auto']"
				>
					<h4 class="mr-3 is-uppercase">
						<strong>Ubicación:</strong>
					</h4>
					<b-image
						:src="require('../assets/img/argentina.svg')"
						alt="The Buefy Logo"
						:rounded="rounded"
						class="m-auto icon-border"
					></b-image>
				</div>
				<div
					class="line mt-3"
					:class="[windowWidth >= 768 ? 'w30' : 'w50 m-auto']"
				>
					<h4 class="mr-3 is-uppercase">
						<strong>Otros Perfiles:</strong>
					</h4>
					<a class="icon-hover" href="linkedin.com">
						<div class="icon-border mr-2">
							<b-icon
								pack="fab"
								icon="linkedin-in"
								size="is-medium"
								type="is-info"
							>
							</b-icon>
						</div>
					</a>
					<a class="icon-hover" href="github.com">
						<div class="icon-border">
							<b-icon
								pack="fab"
								icon="github"
								size="is-medium"
								type="is-info"
							>
							</b-icon>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$info: #202b33;

	.level {
		align-items: flex-start;
	}

	.level-left {
		justify-content: center;
	}

	.img-container {
		width: 75%;
	}

	.icon-hover:hover {
		div {
			background-color: $info;
			span {
				i {
					color: white !important;
				}
			}
		}
	}
</style>

<script>
	// TODO: ver si puedo exportar el tamaño de la ventana como variable global
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