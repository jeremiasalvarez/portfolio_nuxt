<template>
	<b-navbar fixed-top="true" spaced="true" type="is-info">
		<template slot="brand">
			<h4 class="navbar-title">Jeremias Alvarez</h4>
		</template>
		<template slot="end">
			<b-navbar-item class="nav-link" href="#"> Inicio </b-navbar-item>
			<b-navbar-item class="nav-link" href="#info">
				Información
			</b-navbar-item>
			<b-navbar-item class="nav-link" href="#projects">
				Proyectos
			</b-navbar-item>
			<b-navbar-item class="nav-link" href="#contact">
				Contacto
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

	$text-hover: rgb(233, 233, 233);

	.navbar-title {
		pointer-events: none;
		font-family: 'Fredoka One', sans-serif;
		font-size: 2rem;
		padding: 0;
		line-height: 40px;
		font-style: italic;
		margin: auto;
	}

	.nav-link {
		font-size: 1.1rem;
	}
</style>
