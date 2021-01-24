<template>
	<div>
		<b-carousel-list v-model="test" :data="items" :items-to-show="3">
			<template #item="project">
				<div class="card mr-3 ml-3">
					<div class="card-header">
						<p class="card-header-title">{{ project.title }}</p>
					</div>
					<div class="card-image">
						<figure class="image is-2by2">
							<img src="../assets/img/todoapp.png" />
						</figure>
					</div>
					<div class="card-content has-text-light">
						<div class="content">
							<div class="columns is centered is-vcentered">
								<div class="column">
									<b-button
										label="Más Información"
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
			:width="400"
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
		data() {
			return {
				isCardModalActive: false,
				selectedProject: {},
				test: 0,
				items: [
					{
						title: 'Todo App - Control de Tareas',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						stack: [
							'Vue JS',
							'Bootstrap',
							'Node JS',
							'Express JS',
							'MySQL'
						],
						description:
							'Una sencilla aplicación que permite almacenar tareas en una lista, marcalas como completadas o no completas, editar su información y tambien eliminarlas de la lista',
						links: [
							{
								description: 'Repositorio de Github',
								link: 'asd.com',
								icon: 'github',
								pack: 'fab'
							},
							{
								description: 'Demo del Proyecto',
								link: 'asd.com',
								icon: 'play-circle',
								pack: 'fas'
							}
						]
					},
					{
						title: 'Todo App - Control de Tareas',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						stack: [
							'Vue JS',
							'Bootstrap',
							'Node JS',
							'Express JS',
							'MySQL'
						],
						description:
							'Una sencilla aplicación que permite almacenar tareas en una lista, marcalas como completadas o no completas, editar su información y tambien eliminarlas de la lista'
					},
					{
						title: 'Todo App - Control de Tareas',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						stack: [
							'Vue JS',
							'Bootstrap',
							'Node JS',
							'Express JS',
							'MySQL'
						],
						description:
							'Una sencilla aplicación que permite almacenar tareas en una lista, marcalas como completadas o no completas, editar su información y tambien eliminarlas de la lista'
					},
					{
						title: 'Todo App - Control de Tareas',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						stack: [
							'Vue JS',
							'Bootstrap',
							'Node JS',
							'Express JS',
							'MySQL'
						],
						description:
							'Una sencilla aplicación que permite almacenar tareas en una lista, marcalas como completadas o no completas, editar su información y tambien eliminarlas de la lista'
					}
				]
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