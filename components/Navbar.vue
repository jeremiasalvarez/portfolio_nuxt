<template>
	<b-navbar fixed-top spaced type="is-info">
		<template slot="brand">
			<b-navbar-item>
				<!-- el label "english" no cambia el idioma sin el metodo -->
				<div
					@click="switchLang"
					class="is-flex is-align-items-center mr-5"
				>
					<div class="is-flex is-align-items-center mr-5 pr-2">
						<img src="../assets/img/reino-unido.svg" class="mr-2" />
						<p class="mr-1">English</p>
					</div>
					<b-switch
						id="langSwitcher"
						v-model="langSwitchValue"
						style="pointer-events: none"
						true-value="es"
						false-value="en"
						type="is-primary"
						passive-type="is-primary"
					>
						<div class="is-flex is-align-items-center">
							<p class="mr-2">Español</p>
							<img src="../assets/img/argentina.svg" />
						</div>
					</b-switch>
				</div>
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-item class="nav-link" href="#">
				{{ $t('navbar.start') }}
			</b-navbar-item>

			<b-navbar-dropdown class="nav-link" :label="$t('navbar.info')">
				<b-navbar-item @click="setCurrentTab('info', 0)">
					{{ $t('navbar.dropdown.profile') }}
				</b-navbar-item>
				<b-navbar-item @click="setCurrentTab('experience', 2)">
					{{ $t('navbar.dropdown.exp') }}
				</b-navbar-item>
				<b-navbar-item @click="setCurrentTab('projects', 1)">
					{{ $t('navbar.dropdown.projects') }}
				</b-navbar-item>
				<b-navbar-item @click="setCurrentTab('skills', 1)">
					{{ $t('navbar.dropdown.skills') }}
				</b-navbar-item>
			</b-navbar-dropdown>
		</template>
	</b-navbar>
</template>

<script>
	export default {
		computed: {
			currentTab() {
				return this.$store.state.currentTab;
			},
			availableLocales() {
				return this.$i18n.locales.filter(
					(i) => i.code !== this.$i18n.locale
				);
			}
			// langSwitchValue() {
			// 	return 'es';
			// }
		},
		watch: {
			currentTab() {
				this.activeTab = this.$store.state.currentTab;
			},
			langSwitchValue() {
				this.$i18n.locale = this.langSwitchValue;
			}
		},
		data() {
			return {
				activeTab: this.currentTab,
				langSwitchValue: 'es'
			};
		},
		methods: {
			setCurrentTab(element, tabId) {
				this.$store.commit('setCurrentTab', tabId);
				setTimeout(
					function () {
						document.getElementById(element).scrollIntoView();
					},
					tabId === this.activeTab ? 0 : 300
				);
			},
			switchLang() {
				document.querySelector('#langSwitcher').click();
			}
		}
	};
</script>

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
