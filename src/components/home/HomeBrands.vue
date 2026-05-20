<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue';

const brands = [
    { name: 'LEGO®', slug: 'lego' },
    { name: 'Hasbro', slug: 'hasbro' },
    { name: 'Zapf', slug: 'zapf-creation' },
    { name: 'Mattel', slug: 'mattel' },
    { name: 'Albi', slug: 'albi' },
    { name: 'EPEE', slug: 'epee' },
    { name: 'LEGO®', slug: 'lego' },
    { name: 'Hasbro', slug: 'hasbro' },
    { name: 'Zapf', slug: 'zapf-creation' },
];

const getImg = (slug: string) => {
    return new URL(`../../assets/images/brands/logo-${slug}.svg`, import.meta.url).href;
};
</script>

<template>
    <section id="brands" class="container-center mt-20">
        <BaseTitle
            class="flex w-full items-center justify-between"
            title="Oblíbené značky"
            link="/"
            link-text="Všechny značky" />

        <ul
            class="mt-13.75 grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            <li v-for="(brand, idx) in brands" :key="idx" class="w-full">
                <RouterLink :to="'/'" class="group flex flex-col items-center">
                    <div class="flex h-16 w-24 items-center justify-center">
                        <img
                            :src="getImg(brand.slug)"
                            :alt="brand.name"
                            class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span class="mt-2 text-center text-sm underline transition-colors">
                        {{ brand.name }}
                    </span>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
