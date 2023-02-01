<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { User } from "../../interface/user.interface";

const route = useRoute();

const name = computed(() => {
	return route.params.name;
});

const user = ref<User>();

onMounted(async () => {
	const response = await fetch("/users.json");
	const json = await response.json();

	user.value = json.users.find((val: User) => val.name === name.value);
});
</script>

<template>
	<div class="flex flex-col gap-4 p-8">
		<div v-for="post in user?.posts">
			<h2 class="text-2xl">{{ post.subject }}</h2>
			<p>{{ post.content }}</p>
		</div>
	</div>
</template>
