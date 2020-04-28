<template>
  <div class="w-screen h-screen overflow-hidden bg-backgroundColor">
    <router-view/>
  </div>
</template>

<script>
	export default {
		name: 'app',

		data() {
			return {
				isAppVisible: false
			}
		},

		mounted() {
		
		}
	}
</script>

<style>
</style>
