export default defineNuxtRouteMiddleware((to) => {
    const auth = useCookie('auth')
    const publicRoutes = ['/login', '/register', '/remember-pass']
    if (!auth.value && !publicRoutes.includes(to.path)) {
        return navigateTo('/login')
    } else if (auth.value && publicRoutes.includes(to.path)) {
        return navigateTo('/dashboard')
    }
})
