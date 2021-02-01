<template>
	<div class="container has-text-centered mt-5">
		<div
			class="columns is-desktop is-centered is-variable is-1"
			:class="windowWidth >= 768 ? 'is-mobile' : ''"
		>
			<div class="column">
				<div
					class="columns is-mobile is-vcentered is-desktop is-centered is-variable is-1"
				>
					<div class="column is-narrow">
						<h2 class="title is-4 has-text-info">Backend</h2>
					</div>
					<div class="column is-narrow">
						<b-icon
							pack="fas"
							icon="server"
							size="is-medium"
							type="is-info"
						>
						</b-icon>
					</div>
				</div>

				<Skills
					:isMobile="windowWidth <= 768"
					:skillsArray="skillsBackEnd"
				/>
			</div>
			<div class="column">
				<div
					class="columns is-mobile is-vcentered is-desktop is-centered is-variable is-1"
				>
					<div class="column is-narrow">
						<h2 class="title is-4 has-text-info">Frontend</h2>
					</div>
					<div class="column is-narrow">
						<b-icon
							pack="fas"
							icon="laptop"
							size="is-medium"
							type="is-info"
						>
						</b-icon>
					</div>
				</div>

				<Skills
					:isMobile="windowWidth <= 768"
					:skillsArray="skillsFrontEnd"
				/>
			</div>
		</div>
		<Projects />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				skillsBackEnd: [
					{
						name: 'Node JS (Express JS, Sails JS)'
					},
					{
						name: 'ASP.NET Core (MVC - Web API)'
					},
					{
						name: 'PHP'
					},
					{
						name: 'BD: MySQL'
					}
				],
				skillsFrontEnd: [
					{
						name: 'Vue JS, Nuxt JS'
					},
					{
						name: 'React JS'
					},
					{
						name: 'Bootstrap'
					},
					{
						name: 'Bulma (Buefy)'
					}
				],
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