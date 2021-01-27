<template>
	<div class="column is-2">
		<div class="columns is-desktop is-variable is-1 is-vcentered">
			<div class="column">
				<b-tooltip label="Github" type="is-info">
					<a class="icon-hover" href="github.com">
						<div class="icon-border">
							<b-icon
								pack="fab"
								icon="github"
								size="is-medium"
								:type="isFooter ? 'is-light' : 'is-info'"
							>
							</b-icon>
						</div>
					</a>
				</b-tooltip>
			</div>
			<div class="column">
				<b-tooltip label="LinkedIn" type="is-info">
					<a class="icon-hover" href="github.com">
						<div class="icon-border">
							<b-icon
								pack="fab"
								icon="linkedin-in"
								size="is-medium"
								:type="isFooter ? 'is-light' : 'is-info'"
							>
							</b-icon>
						</div>
					</a>
				</b-tooltip>
			</div>
			<div class="column">
				<b-tooltip label="Gitlab" type="is-info">
					<a class="icon-hover" href="github.com">
						<div class="icon-border">
							<b-icon
								pack="fab"
								icon="gitlab"
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
		props: ['isFooter']
	};
</script>