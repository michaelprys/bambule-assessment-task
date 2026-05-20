<script setup lang="ts">
import ProductCard from '@/components/home/products/ProductCard.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import { newArrivals } from '@/data/new-arrivals.ts';
</script>

<template>
    <section class="container-center mt-20">
        <BaseTitle title="Výprodej %" link="/" link-text="Kompletní výprodej" />
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard v-for="prod in newArrivals.slice(0, 4)" :key="prod.id" :product="prod" />
        </div>
    </section>
</template>
