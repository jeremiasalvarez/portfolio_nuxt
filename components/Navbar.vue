<template>
	<b-navbar centered fixed-top spaced type="is-info">
		<!-- <template slot="brand">
			<h4 class="navbar-title">Jeremias Alvarez</h4>
		</template> -->
		<template slot="start">
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
		<template slot="end">
			<b-navbar-item>
				<b-select
					v-model="$i18n.locale"
					placeholder="Country"
					icon="globe"
					icon-pack="fas"
				>
					<option
						v-for="lang in $i18n.locales"
						:key="lang.code"
						:value="lang.code"
					>
						{{ lang.name }}
					</option>
				</b-select>
			</b-navbar-item>
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
		},
		watch: {
			currentTab() {
				this.activeTab = this.$store.state.currentTab;
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
