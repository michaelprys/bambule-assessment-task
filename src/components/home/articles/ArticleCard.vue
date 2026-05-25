<script setup lang="ts">
import BaseButtonPrimary from '@/components/base/BaseButtonPrimary.vue';
import type { Article } from '@/data/articles.ts';
import { getImg } from '@/utils/getImg.utils';
import { useRouter } from 'vue-router';

/*
    composables
 */

const router = useRouter();

/*
    props
 */

defineProps<Article>();
</script>

<template>
    <div class="flex h-full w-full flex-col">
        <div class="overflow-hidden rounded-2xl">
            <picture
                class="block aspect-[1.6/1] w-full transition-transform duration-200 hover:scale-105">
                <source :srcset="getImg(`articles/article-${id}`, 'avif')" type="image/avif" />
                <img
                    :src="getImg(`articles/article-${id}`, 'webp')"
                    :alt="alt"
                    class="h-full w-full object-cover" />
            </picture>
        </div>

        <div class="mt-6 flex flex-1 flex-col items-start">
            <span
                class="font-secondary text-base-white rounded-full px-4 py-1.5 text-[0.8125rem]"
                :style="{ backgroundColor: `var(--color-app-${badgeColor})` }">
                {{ badge }}
            </span>

            <h3 class="mt-3 text-xl leading-tight">{{ title }}</h3>

            <p class="text-base-grey mt-4 line-clamp-3 flex-1 text-[1.125rem]">
                {{ text }}
            </p>

            <div class="mt-4">
                <BaseButtonPrimary class="mt-auto" @click="router.push('/')">
                    Celý článek
                </BaseButtonPrimary>
            </div>
        </div>
    </div>
</template>
