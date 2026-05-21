<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import BaseButtonPrimary from '@/components/base/BaseButtonPrimary.vue';
import type { NewArrival } from '@/data/new-arrivals.ts';
import BaseBadge from '@/components/base/BaseBadge.vue';
import IconStar from '@/components/icons/IconStar.vue';
import { getImg } from '@/utils/getImg.utils';
import { computed } from 'vue';

/*
    props
*/

const props = defineProps<{
    product: NewArrival;
    variant?: 'full' | 'compact';
}>();

/*
    computed
*/

const isCompact = computed(() => props.variant === 'compact');

const badgeColors: Record<string, string> = {
    discount: 'var(--color-app-magenta)',
    tv: 'var(--color-app-blue)',
    delivery: 'var(--color-app-lime)',
};

const displayBadges = computed(() => {
    const badges = props.product.badges;
    if (!badges) return [];
    if (!isCompact.value) return badges;

    return badges.filter((b: { variant: string }) => b.variant === 'discount');
});

const ui = computed(() => ({
    wrapper: isCompact.value ? 'max-w-[13.5rem]' : 'max-w-[21.25rem]',
    bg: isCompact.value ? 'h-[13.5rem]' : 'h-[21.25rem]',
    img: isCompact.value ? 'h-[11.25rem] w-[11.25rem]' : 'h-[17.5rem] w-[17.5rem]',
}));

/*
    methods
*/

const formatPrice = (value: number) => {
    return new Intl.NumberFormat('cs-CZ').format(value);
};
</script>

<template>
    <div v-if="product" :class="['mx-auto flex h-full w-full flex-col', ui.wrapper]">
        <div
            :class="[
                'bg-app-pink-light relative flex w-full items-center justify-center rounded-2xl',
                ui.bg,
            ]">
            <div class="absolute top-3 left-3 z-10 flex flex-col gap-2">
                <BaseBadge
                    v-for="badge in displayBadges"
                    :key="badge.label"
                    :bg-color="badgeColors[badge.variant]">
                    {{ badge.label }}
                </BaseBadge>
            </div>

            <picture>
                <source
                    :srcset="getImg(`products/prod-${product.slug}`, 'avif')"
                    type="image/avif" />
                <img
                    :class="['object-contain', ui.img]"
                    :src="getImg(`products/prod-${product.slug}`, 'webp')"
                    loading="lazy"
                    :alt="product.title" />
            </picture>
        </div>

        <div class="mt-4 flex grow flex-col">
            <div v-if="!isCompact" class="mb-2 flex items-center gap-1">
                <div class="flex gap-1">
                    <IconStar
                        v-for="i in 5"
                        :key="i"
                        :class="[
                            i <= product.rating
                                ? 'text-app-construction fill-current'
                                : 'text-app-construction fill-none stroke-[1px]',
                        ]"
                        class="h-4 w-4" />
                </div>
                <span class="ml-3 text-xs">{{ product.reviews }}x</span>
            </div>

            <h3 :class="['truncate font-medium']" :title="product.title">
                {{ product.title }}
            </h3>

            <div class="mt-2 text-xs">
                <span class="text-app-lime font-bold">{{ product.availability }}</span>
                <RouterLink
                    to="/"
                    class="text-base-black underline before:mx-2 before:inline-block before:no-underline before:content-['·']">
                    {{ product.stores }} poboček
                </RouterLink>
            </div>

            <div class="mt-3 flex min-h-6 flex-wrap items-center gap-x-3 gap-y-2">
                <span v-if="product.oldPrice" class="text-base-black text-base line-through">
                    {{ formatPrice(product.oldPrice) }} Kč
                </span>
                <span
                    class="text-base"
                    :class="[
                        'font-bold',
                        ui.text,
                        product.oldPrice ? 'text-app-magenta' : 'text-base-black',
                    ]">
                    {{ formatPrice(product.price) }} Kč
                </span>

                <div v-if="!isCompact && product.clubPrice" class="sale-badge shrink-0">
                    <span
                        class="text-base-white flex h-full w-full items-center justify-center pr-3 text-[11px] leading-none font-bold">
                        Klub: {{ formatPrice(product.clubPrice) }} Kč
                    </span>
                </div>
            </div>

            <div v-if="!isCompact" class="mt-auto flex items-center gap-2 pt-4">
                <BaseButtonPrimary
                    class="flex h-9.5 w-25.75 flex-none items-center justify-center rounded-lg text-sm">
                    Rezervovat
                </BaseButtonPrimary>
                <BaseButtonSecondary
                    class="flex h-10 w-24 flex-none items-center justify-center rounded-lg text-sm">
                    Do košíku
                </BaseButtonSecondary>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sale-badge {
    display: flex;
    align-items: center;
    height: 1.5rem;
    width: 6.375rem;
    background-image: url('@/assets/images/products/prod-sale.svg');
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
