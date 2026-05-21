<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import { recommended } from '@/data/recommended.ts';
import { useRouter } from 'vue-router';

/*
    composables
*/

const router = useRouter();

/*
    utils
*/

const getImg = (name: string, ext: string) => {
    return new URL(`../../assets/images/recommended/${name}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <section id="recommended" class="container-center mt-[4.981875rem]">
        <h2 class="font-secondary text-3xl">Doporučujeme</h2>

        <div
            class="mt-7 grid grid-cols-1 place-items-center items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div
                v-for="rec in recommended"
                :key="rec.id"
                class="relative h-81.25 w-full max-w-114.75 overflow-hidden rounded-3xl bg-gray-50">
                <picture class="absolute inset-0">
                    <source :srcset="getImg(`rec-${rec.slug}`, 'avif')" type="image/avif" />
                    <img
                        :src="getImg(`rec-${rec.slug}`, 'webp')"
                        :alt="rec.alt"
                        class="h-full w-full object-cover" />
                </picture>

                <div
                    class="absolute inset-0 flex flex-col items-center justify-end px-6 pb-[8%] text-center">
                    <div class="flex w-full flex-col items-center">
                        <h3 class="font-secondary mt-5.5 w-full text-2xl leading-tight">
                            {{ rec.title }}
                        </h3>

                        <div
                            class="mt-3 flex flex-wrap justify-center gap-x-1.5 text-base leading-none font-medium">
                            <RouterLink
                                v-for="(link, idx) in rec.links"
                                :key="idx"
                                :to="link.url"
                                class="whitespace-nowrap underline transition-opacity after:ml-1.5 after:inline-block after:no-underline after:content-['·'] last:after:hidden hover:opacity-70">
                                {{ link.label }}
                            </RouterLink>
                        </div>

                        <div class="mt-6">
                            <BaseButtonSecondary
                                class="h-11 min-w-40 px-6 text-sm"
                                @click="router.push('/')">
                                Celá kategorie
                            </BaseButtonSecondary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
