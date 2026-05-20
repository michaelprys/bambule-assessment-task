<script setup lang="ts">
import ProductCard from '@/components/home/products/ProductCard.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import { newArrivals } from '@/data/new-arrivals.ts';
</script>

<template>
    <section class="container-center my-20">
        <BaseTitle title="Naposledy prohlížené" link="/" link-text="Všechny prohlížené" />

        <div class="mt-8 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <ProductCard
                v-for="prod in newArrivals"
                :key="prod.id"
                :product="prod"
                variant="compact" />
        </div>
    </section>
</template>
