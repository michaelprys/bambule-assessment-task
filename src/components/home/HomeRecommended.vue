<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import { recommended } from '@/data/recommended.ts';
import { useRouter } from 'vue-router';

const router = useRouter();

const getImg = (name: string, ext: string) => {
    return new URL(`../../assets/images/recommended/${name}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <section id="recommended" class="container-center mt-12 px-4 lg:mt-20 lg:px-0">
        <h2 class="font-secondary text-3xl">Doporučujeme</h2>

        <div class="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="rec in recommended"
                :key="rec.id"
                class="relative aspect-459/325 w-full overflow-hidden rounded-3xl bg-gray-50">
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
                        <h3
                            class="font-secondary mt-5.5 w-full text-xl leading-tight sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            {{ rec.title }}
                        </h3>

                        <div
                            class="mt-3 flex flex-wrap justify-center gap-x-1.5 text-sm leading-none font-medium sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
                            <RouterLink
                                v-for="(link, idx) in rec.links"
                                :key="idx"
                                :to="link.url"
                                class="whitespace-nowrap underline transition-opacity after:ml-1.5 after:inline-block after:no-underline after:content-['·'] last:after:hidden hover:opacity-70">
                                {{ link.label }}
                            </RouterLink>
                        </div>

                        <div class="mt-4 sm:mt-2.5 lg:mt-6">
                            <BaseButtonSecondary
                                class="h-10 min-w-36 px-6 text-sm sm:h-8 sm:min-w-28 sm:px-4 sm:text-xs lg:h-9 lg:min-w-32 lg:text-sm xl:h-11 xl:min-w-40"
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
