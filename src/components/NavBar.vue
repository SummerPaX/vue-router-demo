<script setup lang="ts"></script>

<template>
	<nav class="shadow-lg sticky top-0 bg-white w-full flex flex-wrap items-center p-2 gap-2">
		<h2>Navigation</h2>
		<RouterLink :to="{ name: 'Home' }">Home</RouterLink>
		<RouterLink :to="{ name: 'UserSearch' }">UserSearch</RouterLink>
	</nav>
</template>
