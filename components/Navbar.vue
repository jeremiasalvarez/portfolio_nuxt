<template>
	<b-navbar fixed-top="true" spaced="true" type="is-info">
		<template slot="brand">
			<b-navbar-item
				class="link-custom"
				tag="router-link"
				:to="{ path: '/' }"
			>
				<h3 class="navbar-title">
					Jeremias <br />
					Alvarez
				</h3>
			</b-navbar-item>
		</template>

		<template slot="end">
			<b-navbar-item class="nav-link" href="#"> Inicio </b-navbar-item>
			<b-navbar-item class="nav-link" href="#info">
				¿Quien Soy?
			</b-navbar-item>
			<b-navbar-item class="nav-link" href="#projects">
				Proyectos
			</b-navbar-item>
			<b-navbar-item class="nav-link" href="#contact">
				Contacto
			</b-navbar-item>
			<!-- <b-navbar-dropdown hoverable="true" label="Info">
				<b-navbar-item href="#"> About </b-navbar-item>
				<b-navbar-item href="#"> Contact </b-navbar-item>
			</b-navbar-dropdown> -->
		</template>
	</b-navbar>
</template>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');

	$text-hover: rgb(233, 233, 233);

	.link-custom {
		padding: 0;

		.navbar-title {
			font-family: 'Oswald', sans-serif;
			font-size: 2rem;
			padding: 0;
			line-height: 40px;
		}
	}

	.link-custom:hover {
		background-color: unset !important;

		.navbar-title {
			color: $text-hover;
		}
	}

	.nav-link {
		font-size: 1.2rem;
	}
</style>
