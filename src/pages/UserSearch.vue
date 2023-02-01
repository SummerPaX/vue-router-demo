<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { User } from "../interface/user.interface";

const router = useRouter();

const users = ref<User[]>([]);

onMounted(async () => {
	const response = await fetch("users.json");
	const json = await response.json();

	users.value = json.users;
});

function goToUser(name: string) {
	router.push({ name: "User", params: { name: name } });
}
</script>

<template>
	<button
		@click="goToUser(user.name)"
		class="bg-stone-300 m-2 w-24 text-center p-2"
		v-for="user in users"
		:key="user.name"
	>
		{{ user.name }}
	</button>
</template>
