<script setup lang="ts">
import BaseButtonPrimary from '@/components/base/BaseButtonPrimary.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
    id: number;
    badge: string;
    badgeColor: string;
    title: string;
    text: string;
    alt: string;
}>();

const getImg = (ext: string) => {
    return new URL(`../../../assets/images/articles/article-${props.id}.${ext}`, import.meta.url)
        .href;
};
</script>

<template>
    <div class="flex h-full w-full flex-col gap-5">
        <div class="overflow-hidden rounded-2xl">
            <picture
                class="block aspect-[1.6/1] w-full transition-transform duration-200 hover:scale-105">
                <source :srcset="getImg('avif')" type="image/avif" />
                <img :src="getImg('webp')" :alt="alt" class="h-full w-full object-cover" />
            </picture>
        </div>

        <div class="flex flex-1 flex-col items-start gap-4">
            <span
                class="font-secondary rounded-full px-4 py-1.5 text-[0.8125rem] text-white"
                :style="{ backgroundColor: `var(--color-app-${badgeColor})` }">
                {{ badge }}
            </span>

            <h3 class="text-xl leading-tight font-bold">{{ title }}</h3>

            <p class="line-clamp-3 flex-1 text-[1.125rem] leading-relaxed text-gray-500">
                {{ text }}
            </p>

            <BaseButtonPrimary class="mt-auto" @click="router.push('/')">
                Celý článek
            </BaseButtonPrimary>
        </div>
    </div>
</template>
