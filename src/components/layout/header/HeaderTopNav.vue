<script setup lang="ts">
import BaseModalNav from '@/components/base/BaseModalNav.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconClub from '@/components/icons/IconClub.vue';
import IconStore from '@/components/icons/IconStore.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
    <nav>
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

            <li>
                <RouterLink to="/">
                    <IconClub class="h-7 w-7" />
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <IconCart class="h-7 w-7" />
                </RouterLink>
            </li>

            <li class="lg:hidden">
                <button @click="isMenuOpen = true" class="p-1">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </li>
        </ul>

        <BaseModalNav v-model="isMenuOpen" />
    </nav>
</template>
