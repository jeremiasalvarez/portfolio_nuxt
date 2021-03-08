<template>
	<div class="column" :class="isMobile ? 'is-6' : 'is-2'">
		<div
			class="columns is-desktop is-variable is-1 is-vcentered is-mobile"
			:class="isFooter ? 'is-centered' : ''"
		>
			<div
				v-for="(icon, index) in icons"
				:key="index"
				class="column"
				:class="isMobile ? 'is-narrow' : ''"
			>
				<b-tooltip :label="icon.tooltipLabel" type="is-info">
					<a class="icon-hover" :href="icon.href" target="_blank">
						<div class="icon-border">
							<b-icon
								:pack="icon.pack"
								:icon="icon.name"
								size="is-medium"
								:type="isFooter ? 'is-light' : 'is-info'"
							>
							</b-icon>
						</div>
					</a>
				</b-tooltip>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['isFooter', 'isMobile'],
		computed: {
			icons() {
				return [
					{
						pack: 'fab',
						name: 'github',
						tooltipLabel: this.$t('other.tooltips.github'),
						href: 'https://github.com/jeremiasalvarez'
					},
					{
						pack: 'fab',
						name: 'linkedin-in',
						tooltipLabel: this.$t('other.tooltips.linkedin'),
						href: 'https://www.linkedin.com/in/jeremiasalvarezdev/'
					}
				];
			}
		}
		// data() {
		// 	return {
		// 		icons: [
		// 			{
		// 				pack: 'fab',
		// 				name: 'github',
		// 				tooltipLabel: 'Perfil de Github'
		// 			},
		// 			{
		// 				pack: 'fab',
		// 				name: 'linkedin-in',
		// 				tooltipLabel: 'Perfil de Linkedin'
		// 			},
		// 			{
		// 				pack: 'fab',
		// 				name: 'gitlab',
		// 				tooltipLabel: 'Perfil de Gitlab'
		// 			}
		// 		]
		// 	};
		// }
	};
</script>
