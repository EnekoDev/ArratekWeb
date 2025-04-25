<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    const showBtn = ref(false)

    function handleScroll() {
        showBtn.value = window.scrollY > 300
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    const btnClass = "fixed bottom-16 right-10 bg-white hover:bg-lime-500 py-4 px-5 rounded-full shadow-lg transition-all z-50 duration-300 ease-in-out cursor-pointer"
</script>

<template>
    <div>
        <button
            v-if="showBtn"
            :class="btnClass"
            @click="scrollToTop"
        >
            <Icon name="stash:arrow-up-solid" class="text-lime-500 text-lg hover:text-white" />
        </button>
    </div>
</template>