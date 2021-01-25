<template>
	<div class="timeline is-centered minh30vh p-6">
		<header class="timeline-header">
			<span class="tag is-small is-info"></span>
		</header>
		<div
			v-for="(experience, index) in experienceArray"
			:key="index"
			class="timeline-item is-info"
		>
			<div class="timeline-marker is-info"></div>
			<div class="timeline-content">
				<p class="heading is-size-7">{{ experience.timespan }}</p>
				<p class="title is-italic is-size-5">
					{{ experience.companyName }}
				</p>
				<p class="subtitle is-6">
					{{ experience.description }}
				</p>
			</div>
		</div>

		<header class="timeline-header">
			<b-icon
				pack="fas"
				icon="arrow-circle-down"
				size="is-medium"
				type="is-info"
			>
			</b-icon>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				experienceArray: [
					{
						timespan: 'Noviembre 2020 - Presente',
						companyName: 'Devactory Software House',
						companyLogo: '',
						description: 'Desarrollador backend (NodeJS, SailsJS)'
					}
				]
			};
		}
	};
</script>