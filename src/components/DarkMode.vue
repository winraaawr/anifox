<template>
    <button @click="toggleDark()"
        class="flex flex-row items-center md:pr-16 text-gray-800 dark:text-white hover:text-orange-600 transition-all ease-in-out">
        <WhiteBalanceSunnyIcon  v-if="isDark"/>
        <MoonIcon v-else/>
        <span class="block md:hidden ml-4">{{ isDark ? 'Light' : 'Dark' }} Mode</span>
    </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import WhiteBalanceSunnyIcon from '~icons/mdi/white-balance-sunny'
import MoonIcon from '~icons/bx/moon'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>