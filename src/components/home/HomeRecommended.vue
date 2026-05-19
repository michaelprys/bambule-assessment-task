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
    <section id="recommended" class="container-center mt-[4.981875rem]">
        <h2 class="font-secondary mb-10 text-3xl">Doporučejeme</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
                v-for="(rec, index) in recommended"
                :key="rec.id"
                class="bg relative flex min-h-81.25 items-center justify-center overflow-hidden rounded-3xl"
                :style="{
                    backgroundImage: `url(${getImg(`rec-bg-${index + 1}`, 'webp')})`,
                    '--bg-avif': `url(${getImg(`rec-bg-${index + 1}`, 'avif')})`,
                }">
                <div class="relative flex flex-col items-center justify-center">
                    <picture class="mb-2 flex h-20 items-center">
                        <source :srcset="getImg(rec.slug, 'avif')" type="image/avif" />

                        <img
                            :src="getImg(rec.slug, 'webp')"
                            :alt="rec.alt"
                            class="h-30.75 w-full object-cover" />
                    </picture>

                    <div class="mt-[1.419375rem] min-w-67 text-center">
                        <h3 class="font-secondary text-2xl">
                            {{ rec.title }}
                        </h3>

                        <div class="text-base-black mt-2 flex justify-center">
                            <RouterLink
                                v-for="(link, idx) in rec.links"
                                :key="idx"
                                :to="link.url"
                                class="hover:text-base-black transition-colors after:mx-2 after:no-underline after:content-['·'] last:after:hidden">
                                <span class="underline">
                                    {{ link.label }}
                                </span>
                            </RouterLink>
                        </div>
                    </div>

                    <BaseButtonSecondary
                        class="mt-6 h-9.5 w-31.25 px-4 py-3.5 whitespace-nowrap"
                        @click="router.push('/')">
                        Celá kategorie
                    </BaseButtonSecondary>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@supports (background-image: url('test.avif')) {
    .bg {
        background-image: var(--bg-avif);
    }
}
</style>
