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
	<div class="text-center">
		{{ user?.profile }}
	</div>
</template>
