<template>
	<div id="projects">
		<b-carousel-list
			v-model="test"
			:data="items"
			:items-to-show="calcItemsToShow()"
			:arrow-hover="false"
			icon-pack="fas"
			icon-size="is-medium"
		>
			<template #item="project">
				<div class="card mr-3 ml-3 minh100">
					<div class="card-header">
						<p class="card-header-title">{{ project.title }}</p>
					</div>
					<div
						@click="openModal(project)"
						:style="`cursor: pointer; border: 2px solid ${
							project.borderColor || '#202b33'
						}`"
						class="card-image"
					>
						<figure class="image is-3by3">
							<img
								class="imgcard"
								:src="
									require(`~/assets/img/${project.imgRoute}`)
								"
							/>
						</figure>
					</div>
					<div class="card-content has-text-light">
						<div class="content">
							<div class="columns is centered is-vcentered">
								<div class="column">
									<b-button
										:label="
											$t(
												'main.tabs.projectsTab.buttons.more'
											)
										"
										class="m-auto has-text-info"
										type="is-info is-light"
										rounded
										icon-right="info-circle"
										@click="openModal(project)"
									></b-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</b-carousel-list>
		<b-modal
			can-cancel
			has-modal-card
			v-model="isCardModalActive"
			:width="isMobile ? 320 : 400"
			scroll="clip"
		>
			<ProyectCard
				:projectModel="selectedProject"
				@close="closeModal()"
			/>
		</b-modal>
	</div>
</template>

<script>
	export default {
		props: ['isMobile', 'width'],
		async created() {
			const { data: projects } = await this.$axios.get(`/projects`);

			this.projects = projects;

			this.items = this.projects.filter(
				(project) => project.lang === this.currentLang
			);
		},
		computed: {
			currentLang() {
				return this.$i18n.locale;
			}
		},
		watch: {
			currentLang() {
				this.items = this.projects.filter(
					(project) => project.lang === this.currentLang
				);
			}
		},
		data() {
			return {
				isCardModalActive: false,
				selectedProject: {},
				test: 0,
				items: [],
				projects: []
			};
		},
		methods: {
			info(value) {
				this.test = value;
			},
			openModal(project) {
				this.selectedProject = project;
				this.isCardModalActive = true;
			},
			closeModal() {
				this.isCardModalActive = false;
				this.selectedProject = {};
			},
			calcItemsToShow() {
				if (this.width < 960 && this.width >= 768) {
					return 2;
				} else if (this.width < 768) {
					return 1;
				}

				return 3;
			}
		}
	};
</script>

<style lang="scss" scoped>
	figure {
		margin: 0 !important;
	}

	.img-container {
		width: 3rem;
	}
</style>