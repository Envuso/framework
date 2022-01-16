<template>
	<div class="min-h-screen bg-gray-100">
		<GuestNavigation/>

		<main>
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="px-4 py-8 sm:px-0">
					<slot/>
				</div>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import GuestNavigation from "./Elements/GuestNavigation.vue";


export default defineComponent({
	name       : "ApplicationLayout",
	components : {GuestNavigation},
	setup() {
		return {};
	},
});
</script>

<style scoped>

</style>
