<script setup lang="ts">
import BaseModalNav from '@/components/base/BaseModalNav.vue';
import IconStore from '@/components/icons/IconStore.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconClub from '@/components/icons/IconClub.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
    <nav class="flex gap-8">
        <ul class="flex items-center gap-4 whitespace-nowrap lg:gap-8">
            <li class="hidden lg:block">
                <RouterLink class="flex items-center gap-3" to="/">
                    <IconStore />
                    <span class="underline">Prodejny</span>
                </RouterLink>
            </li>

            <li class="hidden xl:block">
                <RouterLink to="/">
                    <span class="underline">Testováno dětmi</span>
                </RouterLink>
            </li>

            <li class="hidden lg:block">
                <RouterLink to="/">
                    <span class="underline">Klub Království hraček</span>
                </RouterLink>
            </li>

            <li class="hidden lg:block">
                <RouterLink to="/">
                    <span class="underline">Kontakt</span>
                </RouterLink>
            </li>
        </ul>

        <ul class="flex items-center gap-4 whitespace-nowrap lg:gap-[1.34375rem]">
            <li class="hidden lg:block">
                <RouterLink to="/">
                    <IconClub class="h-7 w-7" />
                </RouterLink>
            </li>

            <li class="hidden lg:block">
                <RouterLink to="/">
                    <IconCart class="h-7 w-7" />
                </RouterLink>
            </li>

            <li class="lg:hidden">
                <button @click="isMenuOpen = true" class="flex flex-col gap-1 p-1">
                    <span class="h-0.5 w-6 bg-black"></span>
                    <span class="h-0.5 w-6 bg-black"></span>
                    <span class="h-0.5 w-6 bg-black"></span>
                </button>
            </li>
        </ul>

        <BaseModalNav v-model="isMenuOpen" />
    </nav>
</template>
