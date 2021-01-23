<template>
	<div class="container has-text-centered mt-5">
		<div class="columns is-desktop is-centered is-variable is-1">
			<div class="column">
				<div
					class="columns is-vcentered is-desktop is-centered is-variable is-1"
				>
					<div class="column is-narrow">
						<h2 class="title has-text-info">Backend</h2>
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
				<div class="columns is-centered">
					<Skills :skillsArray="skillsBackEnd" />
				</div>
			</div>
			<div class="column">
				<div
					class="columns is-vcentered is-desktop is-centered is-variable is-1"
				>
					<div class="column is-narrow">
						<h2 class="title has-text-info">Frontend</h2>
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
				<div class="columns is-centered">
					<Skills :skillsArray="skillsFrontEnd" />
				</div>
			</div>
		</div>
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
						name: 'MySQL'
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
				]
			};
		}
	};
</script>