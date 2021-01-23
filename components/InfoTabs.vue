<template>
	<section id="info">
		<div class="divider-container w50 m-auto pt-3">
			<div class="divider is-info">
				<h3 class="title is-4 is-size-5-mobile">Información</h3>
			</div>
		</div>
		<div class="container pt-3">
			<b-tabs
				v-model="activeTab"
				type="is-toggle"
				expanded
				multiline
				size="is-medium"
			>
				<b-tab-item
					v-for="(tab, index) in tabs"
					:key="index"
					:headerClass="[
						windowWidth < 768 ? 'minw100' : 'mw33',
						'tab-title'
					]"
					:label="tab.title"
					:icon="tab.icon"
				>
					<component :is="tab.component" />
				</b-tab-item>
			</b-tabs>
		</div>
	</section>
</template>

<script>
	import ExperienceTab from './ExperienceTab.vue';
	import ProfileTab from './ProfileTab.vue';
	import SkillsTab from './SkillsTab.vue';

	export default {
		components: {
			ExperienceTab,
			ProfileTab,
			SkillsTab
		},
		data() {
			return {
				activeTab: 0,
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				tabs: [
					{
						icon: 'user',
						title: 'Informacion',
						component: ProfileTab
					},
					{
						icon: 'code',
						title: 'Aptitudes y Proyectos',
						component: SkillsTab
					},
					{
						icon: 'briefcase',
						title: 'Experiencia',
						component: ExperienceTab
					}
				]
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

<style lang="scss" scoped>
	.mw33 {
		min-width: 33.3% !important;
		max-width: 33.3% !important;
	}
</style>