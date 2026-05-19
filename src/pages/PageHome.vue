<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue';
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
        </main>

        <AppFooter />
    </div>
</template>
