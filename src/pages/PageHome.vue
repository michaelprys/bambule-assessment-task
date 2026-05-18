<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue';
import AppFooter from '@/components/layout/footer/AppFooter.vue';
import AppHeader from '@/components/layout/header/AppHeader.vue';
</script>

<template>
    <div>
        <AppHeader />

        <main>
            <HomeHero />
        </main>

        <AppFooter />
    </div>
</template>
