<template>
	<section class="hero is-info is-medium">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="is-flex is-justify-content-space-around m-auto">
					<div class="img-container">
						<b-image
							:src="require('../static/unnamed.png')"
							alt="The Buefy Logo"
							:rounded="rounded"
							class="user-img m-auto"
						></b-image>
					</div>
					<div class="divider is-vertical is-light is-flex-shrink-3">
						<b-icon :type="'is-white'" icon="star" size="is-medium">
						</b-icon>
					</div>
					<div
						class="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap is-align-self-center"
					>
						<p class="title m-0">Jeremias Alvarez</p>

						<p class="is-size-5 mt-2 is-italic has-text-grey-light">
							Software Developer
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.user-img {
		width: 50%;
		border-radius: 50%;
	}

	.container {
		div {
			width: 80%;
		}
	}
</style>