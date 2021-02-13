<template>
	<div class="modal-card" style="width: auto">
		<header class="modal-card-head has-background-info-light">
			<div class="columns is-mobile is-centered">
				<div class="column is-11">
					<p class="modal-card-title has-text-info">
						{{ projectModel.title }}
					</p>
				</div>
				<div class="column is-1">
					<button
						type="button"
						class="delete"
						@click="$emit('close')"
					/>
				</div>
			</div>
		</header>
		<TitleDivider width="100" size="4" />
		<section class="modal-card-body has-background-info-light p-0">
			<div class="card-content has-text-info">
				<div class="content">
					<p class="title is-6 has-text-info">
						{{ $t('main.tabs.projectsTab.labels.cardTitle') }}
					</p>

					<div class="columns is-variable is-3">
						<div class="column">
							<p
								class="is-italic has-text-weight-semibold has-text-left"
							>
								{{
									$t(
										'main.tabs.projectsTab.labels.description'
									)
								}}:
								<span
									class="ml-2 project-desc has-text-weight-normal"
								>
									{{ projectModel.description }}
								</span>
							</p>
						</div>
					</div>
					<div class="columns is centered">
						<div class="column is-narrow">
							<p
								class="is-italic has-text-weight-semibold has-text-left"
							>
								{{ $t('main.tabs.projectsTab.labels.stack') }}:
							</p>
						</div>
						<div class="column is-9">
							<b-taglist>
								<b-tag
									v-for="(
										techName, index
									) in projectModel.stack"
									:key="index"
									type="is-info"
									size="is-medium"
									rounded
									class="has-text-info-light"
									>{{ techName }}</b-tag
								>
							</b-taglist>
						</div>
					</div>
					<div class="columns is centered">
						<div class="column is-narrow">
							<p
								class="is-italic has-text-weight-semibold has-text-left"
							>
								Links:
							</p>
						</div>
						<div class="column">
							<a
								v-for="(link, index) in projectModel.links"
								:key="index"
								:href="link.href"
							>
								<b-button
									expanded
									type="is-info mb-3"
									outlined
									:icon-pack="link.iconPack"
									:icon-right="link.iconName"
									>{{ link.description }}</b-button
								>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot has-background-info-light">
			<b-button type="is-link" label="Cerrar" @click="$emit('close')" />
		</footer>
	</div>
</template>

<script>
	export default {
		props: ['projectModel']
	};
</script>

<style lang="scss" scoped>
	.project-desc {
		font-style: normal !important;
	}
</style>