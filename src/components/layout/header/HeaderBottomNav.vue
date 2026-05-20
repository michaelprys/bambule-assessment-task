<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
</script>

<template>
    <nav class="bg-base-black mt-[1.25rem] rounded-[0.75rem] py-[1rem] *:text-[1rem]">
        <ul
            class="font-secondary mx-auto grid w-fit grid-cols-2 gap-x-[2.5rem] gap-y-[1rem] px-[1.5rem] *:text-white sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:mr-auto lg:ml-[1.875rem] lg:grid-cols-5 xl:flex xl:w-full xl:max-w-[69.5625rem] xl:grid-cols-none xl:justify-between xl:gap-0">
            <li class="flex cursor-pointer items-center gap-[0.5rem] whitespace-nowrap">
                Kategorie
                <IconArrow class="text-base-grey" />
            </li>
            <li class="cursor-pointer whitespace-nowrap">Akční ceny %</li>
            <li class="flex cursor-pointer items-center gap-[0.5rem] whitespace-nowrap">
                Lego®
                <IconArrow class="text-base-grey" />
            </li>
            <li class="flex cursor-pointer items-center gap-[0.5rem] whitespace-nowrap">
                Venkovní hračky
                <IconArrow class="text-base-grey" />
            </li>
            <li class="whitespace-nowrap"><RouterLink to="/">Znáte z TV</RouterLink></li>
            <li class="whitespace-nowrap"><RouterLink to="/">Vánoce</RouterLink></li>
            <li class="whitespace-nowrap"><RouterLink to="/">Novinky</RouterLink></li>
            <li class="flex cursor-pointer items-center gap-[0.5rem] whitespace-nowrap">
                Pro kluky
                <IconArrow class="text-base-grey" />
            </li>
            <li class="flex cursor-pointer items-center gap-[0.5rem] whitespace-nowrap">
                Pro holky
                <IconArrow class="text-base-grey" />
            </li>
        </ul>
    </nav>
</template>
