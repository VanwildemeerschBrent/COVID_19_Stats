<template>
  <nav class="w-12 h-screen font-bold text-textColor navbar">
    <p class="p-6 mb-20 text-2xl text-center uppercase">
      COVID-19
      <br />Stats
    </p>
    <div
      class="w-full h-auto p-4 font-bold text-center cursor-pointer"
      @click="$router.push('/countries')"
    >
      <c-home-icon class="mb-4 ml-auto mr-auto" />
      <p class="mt-4">Home</p>
    </div>
    <div class="w-full h-auto p-4 font-bold text-center cursor-pointer">
      <p class="mt-4">Countries</p>
    </div>
  </nav>
</template>

<script>
	import HomeIcon from '../assets/icons/HomeIcon'
	export default {
		name: 'navbar',

		components: {
			'c-home-icon': HomeIcon
		}
	}
</script>

<style lang="scss" scoped>
</style>