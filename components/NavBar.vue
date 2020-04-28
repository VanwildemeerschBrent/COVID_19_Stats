<template>
  <nav class="w-12 h-screen font-bold text-textColor navbar">
    <p class="p-6 mb-20 text-2xl text-center uppercase">
      COVID-19
      <br />Stats
    </p>
    <div
      class="w-full h-auto p-4 font-bold text-center cursor-pointer"
      @click="$router.push('/')"
    >
      <c-home-icon class="mb-4 nav-icon" />
      <p class="mt-4">All</p>
    </div>
    <div
      class="w-full h-auto p-4 font-bold text-center cursor-pointer"
      @click="$router.push('/countries')"
    >
      <c-globe-icon class="mb-4 nav-icon" />
      <p class="mt-4">Countries</p>
    </div>
  </nav>
</template>

<script>
	import HomeIcon from '../assets/icons/HomeIcon'
	import GlobeIcon from '../assets/icons/GlobeIcon'
	export default {
		name: 'navbar',

		components: {
			'c-home-icon': HomeIcon,
			'c-globe-icon': GlobeIcon
		}
	}
</script>

<style lang="scss" scoped>
	.nav-icon {
		position: relative;
		transform: translateX(-50%);
		left: 50%;
	}
</style>