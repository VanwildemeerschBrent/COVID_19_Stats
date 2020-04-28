<template>
  <nav class="w-full font-bold text-textColor navbar">
    <p class="relative float-left w-2/12 p-6 text-2xl text-center uppercase">COVID-19 Stats</p>
    <div
      class="relative float-left w-1/12 h-full p-4 mr-2 font-bold text-center cursor-pointer"
      @click="$router.push('/')"
    >
      <p class="m-4">All</p>
    </div>
    <div
      class="relative float-left w-1/12 h-full p-4 mr-2 font-bold text-center cursor-pointer"
      @click="$router.push('/today')"
      :class="{'border-b border-textColor':$route.fullPath.includes('/today')}"
    >
      <p class="m-4">Today</p>
    </div>
    <div
      class="relative float-left w-1/12 h-full p-4 font-bold text-center cursor-pointer"
      @click="$router.push('/countries')"
      :class="{'border-b border-textColor':$route.fullPath.includes('/countries')}"
    >
      <p class="m-4">Countries</p>
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