<template>
	<p>{{ message }}</p>

	<Link href="/hello" method="post" as="button">
		Generate another hello message.
	</Link>
</template>

<script lang="ts">
import {Link} from '@inertiajs/inertia-vue3';
import {defineComponent} from "vue";
import ApplicationLayout from "../Layouts/ApplicationLayout.vue";

export default defineComponent({
	name       : "Hello",
	props      : ['message'],
	layout     : ApplicationLayout,
	components : {
		Link
	}
});
</script>

<style scoped>

</style>
