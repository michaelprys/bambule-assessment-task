<script setup lang="ts">
import HeaderBottomNav from '@/components/layout/header/HeaderBottomNav.vue';
import HeaderSearch from '@/components/layout/header/HeaderSearch.vue';
import HeaderTopNav from '@/components/layout/header/HeaderTopNav.vue';
</script>

<template>
    <header class="bg-base-white container-center mt-5">
        <div class="flex items-center justify-between">
            <RouterLink class="shrink-0" to="/">
                <img src="@img/common/logo.svg" width="218" height="70" alt="Bambule logo" />
            </RouterLink>

            <HeaderSearch />

            <HeaderTopNav />
        </div>

        <HeaderBottomNav />
    </header>
</template>
