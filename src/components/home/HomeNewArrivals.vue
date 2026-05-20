<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue';
import ProductCard from '@/components/home/products/ProductCard.vue';
import { newArrivals } from '@/data/new-arrivals.ts';
</script>

<template>
    <section id="new-arrivals" class="container-center py-12 lg:py-20">
        <BaseTitle title="Novinky" link="/" linkText="Všechny novinky" class="mb-8 lg:mb-10" />

        <div
            class="grid grid-cols-1 grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5 xl:gap-y-12">
            <ProductCard
                v-for="item in newArrivals"
                :key="item.id"
                :product="item"
                variant="full"
                class="w-full" />
        </div>
    </section>
</template>
