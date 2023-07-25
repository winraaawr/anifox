<template>
    <div class="fixed h-auto md:shadow-sm md:bg-white md:dark:bg-zinc-900 w-screen z-40"
    :class="[menuBoolean ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto']">
        <div class="md:container flex flex-col md:flex-row md:items-center justify-between">
            <div class="z-50 flex flex-row justify-between py-4 shadow-md md:shadow-none md:y-6 px-6 md:px-0 bg-white dark:bg-zinc-900">
                <RouterLink to="/" class="z-50 pointer-events-auto">
                    <img src="../assets/logo.svg" class="w-auto h-10 cursor-pointer" alt="foxxy anime logo">
                </RouterLink>
                <button class="block md:hidden pointer-events-auto" @click="toggleMenu()">
                    <MenuIcon class="text-zinc-900 dark:text-white" height="30px" width="30px" />
                </button>
            </div>

            <div class="flex flex-col h-screen w-auto py-8 px-6 space-y-8 text-lg
        bg-white dark:bg-zinc-900
        md:h-auto md:px-0 md:py-0 md:static md:space-y-0 md:flex-row md:items-center md:translate-x-0 md:pointer-events-auto
            transition-all ease-in-out" :class="[menuBoolean ? 'translate-x-0' : '-translate-x-[700px] pointer-events-none']">
                <span
                    class="text-zinc-900 dark:text-white md:pr-16 hover:text-orange-600 transition-all ease-in-out">About</span>
                <DarkMode />
                <button
                    class="text-white bg-orange-600 px-6 py-1.5 rounded-md hover:bg-orange-500 hover:shadow-md transition-all ease-in-out">Login</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DarkMode from './DarkMode.vue';
import MenuIcon from '~icons/mdi/menu'

const menuBoolean = ref(false);

const toggleMenu = () => {
    menuBoolean.value = !menuBoolean.value
}

</script>