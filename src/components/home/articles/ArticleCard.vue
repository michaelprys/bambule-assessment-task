<script setup lang="ts">
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
    <div class="flex w-full flex-col gap-5">
        <div class="overflow-hidden rounded-[2.5rem]">
            <picture class="block aspect-[1.6/1] w-full">
                <source :srcset="getImg('avif')" type="image/avif" />
                <img :src="getImg('webp')" :alt="alt" class="h-full w-full object-cover" />
            </picture>
        </div>

        <div class="flex flex-col items-start gap-4">
            <span
                class="font-secondary rounded-full px-4 py-1.5 text-[0.8125rem] text-white"
                :style="{ backgroundColor: `var(--color-app-${badgeColor})` }">
                {{ badge }}
            </span>

            <h3 class="text-xl leading-tight font-bold">{{ title }}</h3>
            <p class="line-clamp-3 text-[1.125rem] leading-relaxed text-gray-500">{{ text }}</p>

            <RouterLink
                to="/"
                class="mt-2 inline-flex items-center justify-center rounded-lg border border-black bg-white px-5 py-2 text-[15px] font-bold shadow-[0_2px_0_0_rgba(0,0,0,1)] transition-all hover:translate-y-px hover:shadow-none">
                Celý článek
            </RouterLink>
        </div>
    </div>
</template>
