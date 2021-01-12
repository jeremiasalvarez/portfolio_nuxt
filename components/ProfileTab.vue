<template>
	<div class="container has-text-centered mt-5">
		<div class="level m-auto" :class="[windowWidth >= 768 ? 'w80' : 'w90']">
			<!-- Left side -->
			<div class="level-left">
				<div
					class="level-item img-container m-auto"
					:class="[windowWidth >= 768 ? 'pr-5' : '']"
				>
					<b-image
						:src="require('../static/unnamed.png')"
						alt="The Buefy Logo"
						:rounded="rounded"
						class="user-img-mini m-auto"
					></b-image>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"><strong>All</strong></p>
				<p class="level-item"><a>Published</a></p>
				<p class="level-item"><a>Drafts</a></p>
				<p class="level-item"><a>Deleted</a></p>
				<p class="level-item"><a class="button is-success">New</a></p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.level {
		align-items: flex-start;
	}

	.level-left {
		justify-content: center;
	}

	.img-container {
		width: 35%;
	}
</style>

<script>
	// TODO: ver si puedo exportar el tamaño de la ventana como variable global
	export default {
		data() {
			return {
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