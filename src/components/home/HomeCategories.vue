<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue';
import { categories } from '@/data/categories.ts';

const getImg = (slug: string, ext: string) => {
    return new URL(`../../assets/images/categories/cat-${slug}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <section id="categories" class="container-center flex flex-col">
        <BaseTitle
            class="mt-20 flex w-full items-center justify-between"
            title="Top kategorie"
            link="/"
            linkText="Všechny kategorie" />

        <ul
            class="mt-[2.395625rem] grid grid-cols-2 justify-items-center gap-x-6 gap-y-14 px-4 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-12 xl:px-0">
            <li v-for="category in categories" :key="category.name" class="w-full max-w-[11.4rem]">
                <RouterLink class="group flex flex-col items-center" to="/">
                    <div class="bubble-shadow relative aspect-[11.4/11.8] w-full">
                        <div
                            class="bubble-wrapper h-full w-full transition-transform duration-500"
                            :style="{
                                transform: `rotate(${category.rotate}deg) scaleX(${category.scaleX})`,
                            }">
                            <div class="bubble-fill" :style="{ backgroundImage: category.color }" />
                            <div class="bubble-stroke" />
                        </div>

                        <picture
                            class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-[10%]">
                            <source :srcset="getImg(category.slug, 'avif')" type="image/avif" />
                            <img
                                class="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                                :src="getImg(category.slug, 'webp')"
                                :alt="category.alt" />
                        </picture>
                    </div>

                    <p
                        class="mt-5 text-center text-[0.875rem] leading-tight font-bold underline transition-colors duration-300 sm:text-[1rem]">
                        {{ category.name }}
                    </p>
                </RouterLink>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.bubble-shadow {
    filter: drop-shadow(0 0.125rem 0 black);
}
.bubble-wrapper {
    position: relative;
    z-index: 1;
}
.bubble-fill,
.bubble-stroke {
    position: absolute;
    inset: 0;
    background: no-repeat center / contain;
}
.bubble-fill {
    z-index: 1;
    -webkit-mask: url('@/assets/images/base/bubble.png') no-repeat center / contain;
    mask: url('@/assets/images/base/bubble.png') no-repeat center / contain;
}
.bubble-stroke {
    z-index: 2;
    background-image: url('@/assets/images/base/bubble.png');
    mix-blend-mode: multiply;
}
</style>
