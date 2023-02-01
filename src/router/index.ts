import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import UserSearch from "../pages/UserSearch.vue";
import User from "../pages/User.vue";
import Profile from "../pages/User/Profile.vue";
import Posts from "../pages/User/Posts.vue";

const routes = [
	{ name: "Home", path: "/", component: Home },
	{ name: "UserSearch", path: "/usersearch", component: UserSearch },
	{
		name: "User",
		path: "/user/:name",
		component: User,
		children: [
			{ name: "UserProfile", path: "profile", component: Profile },
			{ name: "UserPosts", path: "posts", component: Posts },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
