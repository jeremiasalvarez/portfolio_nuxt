<template>
	<footer class="footer">
		<div class="content has-text-centered">
			<div class="columns is-centered">
				<ProfileIconsLine :isFooter="true" />
			</div>
			<p class="has-text-light has-text-weight-bold">
				{{ `${new Date().getUTCFullYear()}` }}
			</p>
		</div>
	</footer>
</template>

<script>
	export default {};
</script>

<style>
</style>