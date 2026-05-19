<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';

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
    <section id="brands" class="container-center py-20">
        <div class="flex w-full items-center justify-between">
            <h2 class="font-secondary text-3xl">Oblíbené značky</h2>

            <RouterLink
                class="flex items-center gap-2 font-bold underline underline-offset-4"
                to="/">
                Všechny značky
                <IconArrow class="-rotate-90" width="10" height="6" />
            </RouterLink>
        </div>

        <ul class="mt-12.5 flex flex-wrap items-center justify-between gap-6 px-10">
            <li v-for="(brand, idx) in brands" :key="idx">
                <RouterLink :to="'/'" class="group flex flex-col items-center">
                    <div class="flex h-16 w-24 items-center justify-center">
                        <img
                            :src="getImg(brand.slug)"
                            :alt="brand.name"
                            class="object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <span class="underline">
                        {{ brand.name }}
                    </span>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<style scoped>
#brands {
    border-top: 1px solid #f3f4f6;
}
</style>
