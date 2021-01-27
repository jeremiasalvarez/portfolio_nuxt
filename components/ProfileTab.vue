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
				<div class="columns is-vcentered is-gapless mb-2">
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
				<div class="columns is-variable is-3 is-vcentered mb-0">
					<div class="column is-narrow">
						<h4><strong>Perfiles:</strong></h4>
					</div>
					<ProfileIconsLine />
				</div>
				<div class="columns is-variable is-5 is-vcentered mb-0">
					<div class="column is-narrow">
						<h4><strong>Email:</strong></h4>
					</div>
					<div class="column is-2">
						<div
							class="columns is-desktop is-variable is-1 is-vcentered"
						>
							<div class="column">
								<b-tooltip label="Github" type="is-info">
									<a class="icon-hover" href="github.com">
										<div class="icon-border">
											<b-icon
												pack="fas"
												icon="envelope"
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
				<div class="columns is-variable is-1 mb-0">
					<div class="column is-narrow">
						<h4><strong>Educación:</strong></h4>
					</div>
					<div class="column is-narrow">
						<div class="columns is-desktop is-variable is-1">
							<div class="column">
								<p class="has-text-left">
									Tecnico Universitario en Programación,
									<br />
									<i> Universidad Tecnologica Nacional </i>

									<b-icon
										pack="fas"
										icon="graduation-cap"
										size="is-medium"
										type="is-info"
									>
									</b-icon>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="columns is-variable is-vcentered is-8 mb-0">
					<div class="column is-narrow">
						<h4><strong>CV:</strong></h4>
					</div>
					<div class="column is-narrow">
						<div class="columns is-desktop is-variable is-1">
							<div class="column">
								<b-button
									icon-pack="fas"
									type="is-info"
									icon-right="arrow-circle-down"
								>
									Descargar mi CV
								</b-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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