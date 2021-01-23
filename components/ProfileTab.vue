<template>
	<div class="container has-text-centered mt-5">
		<div class="columns is-vcentered is-desktop is-centered is-gapless">
			<div class="column is-one-fifth">
				<b-image
					:src="require('../static/unnamed.png')"
					alt="The Buefy Logo"
					:rounded="true"
					class="user-img-mini m-auto"
				></b-image>
			</div>
			<div class="column is-2">
				<div class="columns is-vcentered is-gapless">
					<div class="column is-justify-content-flex-start is-narrow">
						<h4><strong>Ubicación: </strong></h4>
					</div>
					<div class="column is-10">
						<p>Chaco, Argentina</p>
					</div>
					<div class="column is-2">
						<b-image
							:src="require('../assets/img/argentina.svg')"
							alt="The Buefy Logo"
							:rounded="true"
							class="m-auto icon-border"
						></b-image>
					</div>
				</div>
				<div class="columns is-variable is-1 is-vcentered">
					<div class="column is-narrow">
						<h4><strong>Más Perfiles:</strong></h4>
					</div>
					<div class="column is-2">
						<div class="columns is-variable is-1 is-vcentered">
							<div class="column">
								<b-tooltip label="Github" type="is-info">
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
								</b-tooltip>
							</div>
							<div class="column">
								<b-tooltip label="LinkedIn" type="is-info">
									<a class="icon-hover" href="github.com">
										<div class="icon-border">
											<b-icon
												pack="fab"
												icon="linkedin-in"
												size="is-medium"
												type="is-info"
											>
											</b-icon>
										</div>
									</a>
								</b-tooltip>
							</div>
							<div class="column">
								<b-tooltip label="Gitlab" type="is-info">
									<a class="icon-hover" href="github.com">
										<div class="icon-border">
											<b-icon
												pack="fab"
												icon="gitlab"
												size="is-medium"
												type="is-info"
											>
											</b-icon>
										</div>
									</a>
								</b-tooltip>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$info: #202b33;

	.icon-hover:hover {
		div {
			background-color: $info;
			span {
				color: white !important;
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