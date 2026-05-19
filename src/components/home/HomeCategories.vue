<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
import { categories } from '@/data/categories.ts';

const getImg = (slug: string, ext: string) => {
    return new URL(`../../assets/images/categories/cat-${slug}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <section id="categories" class="container-center flex flex-col gap-10">
        <div class="mt-19.75 flex w-full items-center justify-between">
            <h2 class="font-secondary text-3xl">Top kategorie</h2>

            <RouterLink class="flex items-center gap-2 underline" to="/">
                Všechny kategorie
                <IconArrow class="-rotate-90" />
            </RouterLink>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-12">
            <RouterLink
                to="/"
                v-for="category in categories"
                :key="category.name"
                class="flex flex-col items-center">
                <div class="bubble-shadow relative h-[11.8rem] w-[11.4rem]">
                    <div
                        class="bubble-wrapper h-full w-full transition-transform duration-500"
                        :style="{
                            transform: `rotate(${category.rotate}deg) scaleX(${category.scaleX})`,
                        }">
                        <div class="bubble-fill" :style="{ backgroundImage: category.color }" />
                        <div class="bubble-stroke" />
                    </div>

                    <picture
                        class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-2">
                        <source :srcset="getImg(category.slug, 'avif')" type="image/avif" />
                        <img
                            class="h-[75%] w-[75%] object-contain"
                            :src="getImg(category.slug, 'webp')"
                            :alt="category.alt" />
                    </picture>
                </div>

                <p
                    class="mt-4 text-center text-base font-bold underline decoration-2 underline-offset-4">
                    {{ category.name }}
                </p>
            </RouterLink>
        </div>
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
