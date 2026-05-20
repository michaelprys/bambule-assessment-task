<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue';
import { categories } from '@/data/categories.ts';

const getImg = (slug: string, ext: string) => {
    return new URL(`../../assets/images/categories/cat-${slug}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <section id="categories" class="container-center flex flex-col items-center">
        <BaseTitle
            class="mt-20 flex w-full items-center justify-between"
            title="Top kategorie"
            link="/"
            link-text="Všechny kategorie" />

        <ul
            class="mt-[3.21625rem] grid w-full grid-cols-[repeat(auto-fit,11.398125rem)] justify-center gap-[3.21625rem]">
            <li v-for="category in categories" :key="category.name" class="w-[11.398125rem]">
                <RouterLink class="group flex flex-col items-center" to="/">
                    <div class="flex h-[11.794375rem] w-[11.398125rem] items-center justify-center">
                        <picture>
                            <source :srcset="getImg(category.slug, 'avif')" type="image/avif" />
                            <img
                                class="h-full w-full object-contain"
                                :src="getImg(category.slug, 'webp')"
                                :alt="category.name"
                                loading="lazy" />
                        </picture>
                    </div>

                    <p class="mt-5 text-center text-[1rem] underline">
                        {{ category.name }}
                    </p>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>
