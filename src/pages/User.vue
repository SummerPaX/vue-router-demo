<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const name = computed(() => {
	return route.params.name;
});
</script>

<template>
	<h1 class="text-center text-3xl p-6">Hallo ich bin {{ name }}</h1>
	<div class="flex justify-center gap-4">
		<button
			@click="router.push({ name: 'UserProfile', params: { name } })"
			class="bg-stone-300 p-1 rounded"
		>
			Profile
		</button>
		<button
			@click="router.push({ name: 'UserPosts', params: { name } })"
			class="bg-stone-300 p-1 rounded"
		>
			Posts
		</button>
	</div>
	<RouterView></RouterView>
</template>
