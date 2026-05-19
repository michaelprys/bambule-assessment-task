<script setup lang="ts">
import HomeArticles from '@/components/home/HomeArticles.vue';
import HomeBrands from '@/components/home/HomeBrands.vue';
import HomeCategories from '@/components/home/HomeCategories.vue';
import HomeHero from '@/components/home/HomeHero.vue';
import HomeRecommended from '@/components/home/HomeRecommended.vue';
import HomeSearch from '@/components/home/HomeSearch.vue';
import AppFooter from '@/components/layout/footer/AppFooter.vue';
import AppHeader from '@/components/layout/header/AppHeader.vue';
</script>

<template>
    <div>
        <AppHeader />

        <main>
            <HomeHero />
            <HomeSearch />
            <HomeCategories />
            <HomeBrands />
            <HomeRecommended />
            <HomeArticles />
        </main>

        <AppFooter />
    </div>
</template>
