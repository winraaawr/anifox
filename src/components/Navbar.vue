<template>
    <div class="fixed h-auto md:shadow-sm md:bg-white md:dark:bg-zinc-900 w-full z-40"
    :class="[menuBoolean ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto']">
        <div class="w-full md:container flex flex-col md:flex-row md:items-center justify-between">
            <div class="border-indigo-500 px-2 md:px-0 z-50 flex flex-row justify-between py-4 shadow-md md:shadow-none bg-white dark:bg-zinc-900">
                <RouterLink to="/" class="z-50 pointer-events-auto">
                    <img src="../assets/logo-text.png" class="w-auto h-10 cursor-pointer" alt="foxxy anime logo">
                </RouterLink>
                <button class="block md:hidden pointer-events-auto" @click="toggleMenu()">
                    <MenuIcon class="text-zinc-900 dark:text-white" height="30px" width="30px" />
                </button>
            </div>

            <div class="flex flex-col h-screen w-auto py-8 px-6 space-y-8 text-base
        bg-white dark:bg-zinc-900
        md:h-auto md:px-0 md:py-0 md:space-y-0 md:flex-row md:items-center md:translate-x-0 md:pointer-events-auto
            transition-all ease-in-out" :class="[menuBoolean ? 'translate-x-0' : '-translate-x-[700px] pointer-events-none']">
                <RouterLink to="/about"
                    class="md:pr-16 text-zinc-900 dark:text-white dark:hover:text-orange-600 hover:text-orange-600 transition-all ease-in-out">About</RouterLink>
                <DarkMode class="md:pr-16 text-zinc-900 dark:text-white dark:hover:text-orange-600 hover:text-orange-600"/>
                <RouterLink to="/login"
                    class="text-white bg-orange-600 px-4 py-1 rounded-md hover:bg-orange-500 hover:shadow-md transition-all ease-in-out">
                    Login
                </RouterLink>
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