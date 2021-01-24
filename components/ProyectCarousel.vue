<template>
	<b-carousel-list v-model="test" :data="items" :items-to-show="3">
		<template #item="list">
			<div class="card mr-3 ml-3">
				<div class="card-header">
					<p class="card-header-title">Todo-App</p>
				</div>
				<div class="card-image">
					<figure class="image is-2by2">
						<img :src="list.image" />
					</figure>
				</div>
				<div class="card-content has-text-light">
					<div class="content">
						<p class="title is-6 has-text-light">
							Sobre el Proyecto
						</p>
					</div>
				</div>
			</div>
		</template>
	</b-carousel-list>
</template>

<script>
	export default {
		data() {
			return {
				test: 0,
				items: [
					{
						title: 'Slide 1',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 4.4
					},
					{
						title: 'Slide 2',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 3.5
					},
					{
						title: 'Slide 3',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 5
					},
					{
						title: 'Slide 4',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png'
					},
					{
						title: 'Slide 5',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 5
					},
					{
						title: 'Slide 6',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 4
					},
					{
						title: 'Slide 7',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 2.7
					},
					{
						title: 'Slide 8',
						image:
							'https://buefy.org/static/img/placeholder-1280x960.png',
						rating: 1.5
					}
				]
			};
		},
		methods: {
			info(value) {
				this.test = value;
			}
		}
	};
</script>