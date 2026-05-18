<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
</script>
<template>
    <nav class="bg-base-black mt-5 rounded-xl py-4 *:text-base">
        <ul
            class="*:text-base-white font-secondary mx-7.5 flex w-full max-w-278.25 justify-between">
            <li class="flex cursor-pointer items-center gap-2">
                Kategorie
                <IconArrow class="text-base-grey" />
            </li>
            <li class="cursor-pointer">Akční ceny %</li>
            <li class="flex cursor-pointer items-center gap-2">
                Lego®
                <IconArrow class="text-base-grey" />
            </li>
            <li class="flex cursor-pointer items-center gap-2">
                Venkovní hračky
                <IconArrow class="text-base-grey" />
            </li>
            <li><RouterLink to="/">Znáte z TV</RouterLink></li>
            <li><RouterLink to="/">Vánoce</RouterLink></li>
            <li><RouterLink to="/">Novinky</RouterLink></li>
            <li class="flex cursor-pointer items-center gap-2">
                Pro kluky
                <IconArrow class="text-base-grey" />
            </li>
            <li class="flex cursor-pointer items-center gap-2">
                Pro holky
                <IconArrow class="text-base-grey" />
            </li>
        </ul>
    </nav>
</template>
