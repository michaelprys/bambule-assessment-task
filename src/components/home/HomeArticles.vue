<script setup lang="ts">
import ArticleCard from '@/components/home/articles/ArticleCard.vue';
import BaseTitle from '@/components/base/BaseTitle.vue';
import { articlesData } from '@/data/articles';
</script>

<template>
    <section id="articles" class="container-center mt-20">
        <BaseTitle
            class="flex w-full items-center justify-between"
            title="Bambule radí"
            link="/"
            link-text="Zobrazit vše" />

        <div
            class="mt-8 grid grid-cols-1 items-stretch gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            <ArticleCard
                v-for="article in articlesData"
                :key="article.id"
                v-bind="article"
                class="flex h-full flex-col" />
        </div>
    </section>
</template>
