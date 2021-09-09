<template>
	<p>{{ message }}</p>

	<Link href="/hello" method="post">
		Generate another hello message.
	</Link>
</template>

<script lang="js">
import {Link} from '@inertiajs/inertia-vue3';

export default {
	name  : "Hello",
	props : ['message'],
	components : {
		Link
	}
};
</script>

<style scoped>

</style>
