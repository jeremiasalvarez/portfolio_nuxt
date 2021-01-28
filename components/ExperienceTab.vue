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
				<div
					class="columns is-mobile is-varible is-1 is-vcentered mt-2"
				>
					<div
						class="column p-0"
						:class="windowWidth >= 768 ? 'is-1' : 'is-4'"
					>
						<img
							:src="
								require(`~/assets/img/${experience.companyLogo}`)
							"
						/>
					</div>

					<div
						class="column p-0"
						:class="windowWidth >= 768 ? 'is-narrow' : 'is-11'"
					>
						<p class="title is-italic is-size-5">
							{{ experience.companyName }}
						</p>
					</div>
				</div>

				<div
					class="columns is-mobile"
					:class="windowWidth >= 768 ? 'is-vcentered' : 'mt-1'"
				>
					<div class="column is-narrow p-0 mr-1">
						<b-icon type="is-info" icon="laptop-code" pack="fas">
						</b-icon>
					</div>
					<div
						class="column p-0"
						:class="windowWidth >= 768 ? 'is-narrow' : 'is-11'"
					>
						<p class="subtitle has-text-info is-6">
							{{ experience.description }}
						</p>
					</div>
				</div>
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
						companyLogo: 'devactory.png',
						description: 'Desarrollador backend (NodeJS, SailsJS)'
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
			},
			setCurrentTab(index) {
				this.$store.commit('setCurrentTab', index);
			}
		}
	};
</script>