<template>
	<div id="projects">
		<b-carousel-list
			v-model="test"
			:data="items"
			:items-to-show="isMobile ? 1 : 3"
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
								:src="require(`~/assets/img/${project.image}`)"
							/>
						</figure>
					</div>
					<div class="card-content has-text-light">
						<div class="content">
							<div class="columns is centered is-vcentered">
								<div class="column">
									<b-button
										label="Descripción"
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
		props: ['isMobile'],
		data() {
			return {
				isCardModalActive: false,
				selectedProject: {},
				test: 0,
				items: [
					{
						title: 'Todo App - Control de Tareas',
						image: 'todoapp.png',
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
								link:
									'https://github.com/jeremiasalvarez/vuejs-todo',
								icon: 'github',
								pack: 'fab'
							},
							{
								description: 'Demo del Proyecto',
								link: 'https://task-manager-vuejs.herokuapp.com/',
								icon: 'play-circle',
								pack: 'fas'
							}
						]
					},
					{
						title: 'Consultorio Dental',
						image: 'sonrisa.png',
						stack: [
							'Vanilla JS',
							'Bootstrap',
							'Handlebars',
							'Node JS',
							'Express JS',
							'MySQL'
						],
						description:
							'Aplicación para gestionar turnos de un consultorio dental ficticio. La dentista (usuario administrador) puede recibir solicitudes de turnos de los pacientes. Las solicitudes pueden ser aceptadas (se programa el turno) o rechazadas. Los turnos pueden ser reprogramados o cancelados y los pacientes son notificados via e-mail. La dentista tambien puede acceder a la historia clinica de todos los pacientes, e imprimirla.\n Los pacientes pueden registrarse en el sistema, solicitar turnos, pagar por dichos turnos (el sistema incluye pagos reales mediante la API de Mercadopago) y observar su historia clinica.\n\nEste proyecto fue una asignación/tarea universitaria.',
						links: [
							{
								description: 'Repositorio de Github',
								link: 'asd.com',
								icon: 'github',
								pack: 'fab'
							},
							{
								description: 'Demo del Proyecto',
								link: 'http://turnos-sonrisafeliz.herokuapp.com/',
								icon: 'play-circle',
								pack: 'fas'
							}
						]
					},
					{
						title: 'Portfolio Personal',
						image: 'portfolio.png',
						stack: ['Vue JS', 'Nuxt JS', 'Buefy / Bulma'],
						description:
							'El sitio que estas viendo actualmente. Hecho a modo de presentación',
						borderColor: '#ccc',
						links: [
							{
								description: 'Repositorio de Github',
								link:
									'https://github.com/jeremiasalvarez/portfolio',
								icon: 'github',
								pack: 'fab'
							}
						]
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