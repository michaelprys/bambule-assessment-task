<script setup lang="ts">
import BaseDropdown from '@/components/base/BaseDropdown.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import { navItems } from '@/data/navigation.ts';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const activeMenu = ref<string | null>(null);
const navRef = ref(null);

const toggleMenu = (label: string) => {
    activeMenu.value = activeMenu.value === label ? null : label;
};

onClickOutside(navRef, () => (activeMenu.value = null));
</script>

<template>
    <nav class="bg-base-black mt-5 overflow-visible rounded-xl py-4" ref="navRef">
        <ul
            class="font-secondary *:text-base-white xs:mx-auto mr-auto grid w-fit grid-cols-2 gap-x-10 gap-y-4 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:mx-7.5 xl:flex xl:w-full xl:max-w-278.25 xl:grid-cols-none xl:justify-between xl:gap-0">
            <li
                v-for="item in navItems"
                :key="item.label"
                class="relative"
                :class="{ 'z-[60]': activeMenu === item.label }">
                <component
                    :is="item.to ? 'RouterLink' : 'button'"
                    :to="item.to"
                    @click="item.isMenu ? toggleMenu(item.label) : null"
                    class="flex cursor-pointer items-center gap-2 rounded-md whitespace-nowrap transition-all outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/50"
                    :class="{ 'text-yellow-400': activeMenu === item.label }">
                    {{ item.label }}
                    <IconArrow
                        v-if="item.isMenu"
                        class="text-base-grey transition-transform duration-300"
                        :class="{ 'rotate-180': activeMenu === item.label }" />
                </component>

                <BaseDropdown :is-open="item.isMenu && activeMenu === item.label">
                    <template v-if="item.children?.length">
                        <router-link
                            v-for="sub in item.children"
                            :key="sub.label"
                            :to="sub.to"
                            @click="activeMenu = null"
                            class="text-base-black block rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 hover:bg-gray-100 active:scale-95">
                            {{ sub.label }}
                        </router-link>
                    </template>
                    <div v-else class="px-4 py-3 text-center text-sm text-gray-400 italic">
                        Žádné položky
                    </div>
                </BaseDropdown>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    text-align: left;
}
</style>
