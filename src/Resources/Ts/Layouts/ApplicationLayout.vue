<template>
	<div class="min-h-screen bg-gray-100">

		<MainNavigation :user="user"/>

		<div class="py-10">
			<header>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl font-bold leading-tight text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="px-4 py-8 sm:px-0">
						<slot/>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {UserObject} from "../types";
import MainNavigation from "./Elements/MainNavigation.vue";

export default defineComponent({
	name       : "ApplicationLayout",
	components : {MainNavigation},
	props      : {
		user : {type : Object as PropType<UserObject>}
	},
	data() {
		return {};
	},
});
</script>

<style scoped>

</style>
