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
				<div
					class="columns is-mobile is-vcentered is-gapless mb-2"
					:class="[windowWidth > 768 ? '' : 'is-centered']"
				>
					<div class="column is-justify-content-flex-start is-narrow">
						<h4><strong>Ubicación: </strong></h4>
					</div>
					<div
						class="column"
						:class="[windowWidth > 768 ? 'is-10' : 'is-5']"
					>
						<p>Chaco, Argentina</p>
					</div>
					<div
						class="column"
						:class="[windowWidth > 768 ? 'is-2' : 'is-1']"
					>
						<b-image
							:src="require('../assets/img/argentina.svg')"
							alt="The Buefy Logo"
							:rounded="true"
							class="m-auto icon-border m-0 minw100"
						></b-image>
					</div>
				</div>
				<div
					class="columns is-variable is-3 is-vcentered mb-0"
					:class="[windowWidth < 768 ? 'is-mobile is-centered' : '']"
				>
					<div class="column is-narrow">
						<h4><strong>Perfiles:</strong></h4>
					</div>
					<ProfileIconsLine :isMobile="windowWidth < 768" />
				</div>
				<div
					:class="
						windowWidth < 768
							? 'is-centered is-mobile is-5'
							: 'is-5'
					"
					class="columns is-variable is-vcentered mb-0 w90"
				>
					<div class="column is-narrow">
						<h4><strong>Email:</strong></h4>
					</div>
					<div
						class="column"
						:class="windowWidth < 768 ? 'is-6' : 'is-2'"
					>
						<div
							class="columns is-mobile is-variable is-1 is-vcentered"
						>
							<div
								class="column is-narrow"
								:class="windowWidth < 768 ? 'pl-0' : ''"
							>
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
				<!-- class="columns is-variable is-5 is-vcentered mb-0 is-centered is-mobile" -->
				<div
					class="columns is-mobile is-variable is-1 mb-0"
					:class="windowWidth > 768 ? '' : 'is-centered'"
				>
					<div
						class="column"
						:class="windowWidth > 768 ? 'is-narrow' : 'is-4'"
					>
						<h4 :class="windowWidth > 768 ? '' : 'has-text-right'">
							<strong>Educación:</strong>
						</h4>
					</div>
					<div
						class="column"
						:class="windowWidth >= 768 ? 'is-11' : 'is-7 pl-2'"
					>
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
				<div
					class="columns is-mobile is-variable is-vcentered mb-0 w90"
					:class="windowWidth > 768 ? 'is-8' : 'is-centered is-5'"
				>
					<div class="column is-narrow">
						<h4><strong>CV:</strong></h4>
					</div>
					<div
						class="column is-narrow"
						:class="windowWidth > 768 ? '' : 'is-6'"
					>
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