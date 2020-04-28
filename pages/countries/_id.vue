<template>
  <div class="country-detail">
	  <p class="text-textColor">Country detail</p>
  </div>
</template>

<script>
	export default {
		name: 'country-detail',

		data: {
			countryIso2: this.$route.params.id
		}
	}
</script>

<style lang="scss" scoped>
</style>