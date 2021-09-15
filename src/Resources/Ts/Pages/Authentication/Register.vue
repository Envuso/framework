<template>
	<div class="w-full h-full flex flex-col items-center justify-center">
		<div class="bg-white rounded-md shadow-md p-6 max-w-sm w-full">
			<form @submit.prevent="register">

				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<div class="mt-1 relative rounded-md shadow-sm">
						<input
							type="email"
							name="email"
							:disabled="form.processing"
							id="email"
							:class="{
								'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : form.errors.email,
								'border-gray-300' : !form.errors.email
							}"
							class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
							placeholder="you@example.com"
							v-model="form.email"
							:aria-invalid="form.errors.email !== null ? 'true' : undefined"
							:aria-describedby="form.errors.email !== null ? 'email-error' : undefined"
						/>
						<div v-if="form.errors.email" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true"/>
						</div>
					</div>
					<p v-if="form.errors.email" class="mt-2 text-xs text-red-600" id="email-error">
						{{ form.errors.email }}
					</p>
				</div>

				<div class="mt-4">
					<label for="password" class="block text-sm font-medium text-gray-700">Name</label>
					<div class="mt-1 relative rounded-md shadow-sm">
						<input
							type="password"
							name="name"
							id="name"
							:class="{
								'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : form.errors.name,
								'border-gray-300' : !form.errors.name
							}"
							class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
							v-model="form.name"
							:disabled="form.processing"
							:aria-invalid="form.errors.name !== null ? 'true' : undefined"
							:aria-describedby="form.errors.name !== null ? 'name-error' : undefined"
						/>
						<div v-if="form.errors.name" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true"/>
						</div>
					</div>
					<p v-if="form.errors.name" class="mt-2 text-xs text-red-600" id="name-error">
						{{ form.errors.name }}
					</p>
				</div>

				<div class="mt-4">
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<div class="mt-1 relative rounded-md shadow-sm">
						<input
							type="password"
							name="password"
							id="password"
							:class="{
								'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : form.errors.password,
								'border-gray-300' : !form.errors.password
							}"
							class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
							v-model="form.password"
							:disabled="form.processing"
							:aria-invalid="form.errors.password !== null ? 'true' : undefined"
							:aria-describedby="form.errors.password !== null ? 'password-error' : undefined"
						/>
						<div v-if="form.errors.password" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true"/>
						</div>
					</div>
					<p v-if="form.errors.password" class="mt-2 text-xs text-red-600" id="password-error">
						{{ form.errors.password }}
					</p>
				</div>
				<div class="mt-4">
					<label for="password" class="block text-sm font-medium text-gray-700">Confirm Password </label>
					<div class="mt-1 relative rounded-md shadow-sm">
						<input
							type="password"
							name="password_confirmation"
							id="password_confirmation"
							:class="{
								'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : form.errors.password_confirmation,
								'border-gray-300' : !form.errors.password_confirmation
							}"
							class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
							v-model="form.password_confirmation"
							:disabled="form.processing"
							:aria-invalid="form.errors.password_confirmation !== null ? 'true' : undefined"
							:aria-describedby="form.errors.password_confirmation !== null ? 'password_confirmation-error' : undefined"
						/>
						<div v-if="form.errors.password_confirmation" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true"/>
						</div>
					</div>
					<p v-if="form.errors.password_confirmation" class="mt-2 text-xs text-red-600" id="password_confirmation-error">
						{{ form.errors.password_confirmation }}
					</p>
				</div>

				<div class="mt-4">
					<button type="submit"
							:disabled="form.processing"
							class="w-full flex disabled:opacity-50 disabled:cursor-not-allowed justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import {useForm} from "@inertiajs/inertia-vue3";
import {defineComponent} from 'vue';
import ApplicationGuest from "../../Layouts/ApplicationGuest.vue";

import {ExclamationCircleIcon} from '@heroicons/vue/solid';

export default defineComponent({
	name       : "Register",
	layout     : ApplicationGuest,
	components : {
		ExclamationCircleIcon,
	},
	setup() {
		const form = useForm({
			name             : null,
			email            : null,
			password         : null,
			password_confirmation : null,
		});

		const register = async () => {
			form.clearErrors();
			form.post('/register', {
				onSuccess : () => {
					console.log('Logged in');
				}
			});
		};

		return {
			form, register
		};
	}
});
</script>

<style scoped>

</style>
