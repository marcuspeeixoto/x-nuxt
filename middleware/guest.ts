import actions from "~/actions";

export default defineNuxtRouteMiddleware(async () => {
    const auth = useAuthStore();
    const authChecked = useState("auth-checked", () => false);

    if (!auth.isLoggedIn && !authChecked.value) {
        authChecked.value = true;
        try {
            await actions.auth.fetchUser();
        } catch {
            auth.setUser(null);
        }
    }

    if (auth.isLoggedIn) {
        return navigateTo("/", {replace: true});
    }
});
