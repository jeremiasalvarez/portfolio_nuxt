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
					:headerClass="[
						windowWidth < 768 ? 'minw100' : 'mw33',
						'tab-title'
					]"
					label="Perfil"
					icon="clipboard-account"
				>
					<ProfileTab />
				</b-tab-item>
				<b-tab-item
					:headerClass="[
						windowWidth < 768 ? 'minw100' : 'mw33',
						'tab-title'
					]"
					label="Habilidades"
					icon="code-tags-check"
				>
					<SkillsTab />
				</b-tab-item>
				<b-tab-item
					:headerClass="[
						windowWidth < 768 ? 'minw100' : 'mw33',
						'tab-title'
					]"
					label="Experiencia"
					icon="briefcase"
				>
					<ExperienceTab />
				</b-tab-item>
			</b-tabs>
		</div>
	</section>
</template>

<script>
	// TODO: ver si puedo exportar el tamaño de la ventana como variable global
	export default {
		data() {
			return {
				activeTab: 0,
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

<style lang="scss" scoped>
	.mw33 {
		min-width: 33.3% !important;
		max-width: 33.3% !important;
	}

	li.minw100.tab-title {
		a {
			color: red;
		}
	}
</style>