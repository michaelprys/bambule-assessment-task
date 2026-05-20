<script setup lang="ts">
import ProductCard from '@/components/home/products/ProductCard.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import { newArrivals } from '@/data/new-arrivals.ts';
</script>

<template>
    <section id="new-arrivals" class="container-center mt-20">
        <BaseTitle title="Novinky" link="/" link-text="Všechny novinky" />

        <div
            class="mt-8 grid grid-cols-1 justify-center gap-y-12 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-5 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-16">
            <ProductCard v-for="item in newArrivals.slice(0, 4)" :key="item.id" :product="item" />
        </div>
    </section>
</template>
