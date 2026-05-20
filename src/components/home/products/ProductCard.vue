<script setup lang="ts">
import BaseButtonPrimary from '@/components/base/BaseButtonPrimary.vue';
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import IconStar from '@/components/icons/IconStar.vue';
import { NewArrival } from '@/data/new-arrivals.ts';

defineProps<{
    product: NewArrival;
    variant?: 'full' | 'compact';
}>();

const getImg = (slug: string, ext: string) => {
    return new URL(`../../../assets/images/products/prod-${slug}.${ext}`, import.meta.url).href;
};
</script>

<template>
    <div class="flex h-full w-full max-w-85 flex-col">
        <div class="relative flex h-85 w-full items-center justify-center rounded-2xl bg-[#F5F5F7]">
            <picture>
                <source :srcset="getImg(product.slug, 'avif')" type="image/avif" />
                <img
                    class="h-70 w-70 object-cover"
                    :src="getImg(product.slug, 'webp')"
                    loading="lazy"
                    :alt="product.alt" />
            </picture>
        </div>

        <div class="mt-4 flex grow flex-col">
            <div v-if="variant !== 'compact'" class="mb-2 flex items-center gap-1">
                <div class="flex gap-1">
                    <IconStar
                        v-for="i in 5"
                        :key="i"
                        :class="[
                            i <= (product.rating || 4)
                                ? 'text-app-construction fill-current'
                                : 'text-app-construction fill-none stroke-[1px]',
                        ]"
                        class="h-4 w-4" />
                </div>
                <span class="ml-3 text-xs">{{ product.reviews }}x</span>
            </div>

            <h3>{{ product.title }}</h3>

            <div class="mt-2">
                <span class="text-app-lime text-xs">{{ product.availability }}</span>
                <span
                    class="text-base-black text-xs underline before:mx-2 before:inline-block before:no-underline before:content-['·']">
                    {{ product.stores }} poboček
                </span>
            </div>

            <div class="mt-3 flex min-h-6 max-w-61.5 flex-wrap items-center gap-2">
                <span v-if="product.oldPrice" class="text-base-black text-base line-through">
                    {{ product.oldPrice }} Kč
                </span>

                <span
                    class="text-base"
                    :class="product.oldPrice ? 'text-app-magenta' : 'text-base-black'">
                    {{ product.price }} Kč
                </span>

                <div
                    v-if="variant !== 'compact' && product.oldPrice && product.clubPrice"
                    class="sale-badge ml-auto flex items-center justify-center pr-2">
                    <span class="text-base-white text-xs whitespace-nowrap">
                        Klub: {{ product.clubPrice }} Kč
                    </span>
                </div>
            </div>

            <div v-if="variant !== 'compact'" class="mt-auto flex items-center gap-2 pt-4">
                <BaseButtonPrimary
                    class="flex h-9.5 w-25.75 flex-none items-center justify-center rounded-lg">
                    Rezervovat
                </BaseButtonPrimary>

                <BaseButtonSecondary
                    class="flex h-9.5 w-24 flex-none items-center justify-center rounded-lg">
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
    background-image: url('@img/products/prod-sale.svg');
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
