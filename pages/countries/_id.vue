<template>
  <div class="country-detail">
    <p>Country detail {{id}}</p>
  </div>
</template>

<script>
	export default {
		name: 'country-detail',
		props: {
			id: { required: true, type: String }
		}
	}
</script>

<style lang="scss" scoped>
</style>