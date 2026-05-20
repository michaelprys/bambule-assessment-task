<script setup lang="ts">
import HeaderBottomNav from '@/components/layout/header/HeaderBottomNav.vue';
import HeaderSearch from '@/components/layout/header/HeaderSearch.vue';
import HeaderTopNav from '@/components/layout/header/HeaderTopNav.vue';
</script>

<template>
    <header class="bg-base-white container-center relative z-100 pt-4 lg:pt-6">
        <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-4 lg:flex-nowrap">
            <RouterLink class="shrink-0" to="/">
                <img
                    src="@img/base/logo.svg"
                    class="h-auto w-30 sm:w-40 lg:w-54.5"
                    alt="Bambule logo" />
            </RouterLink>

            <div class="mx-6 hidden flex-1 lg:block">
                <HeaderSearch />
            </div>

            <HeaderTopNav />

            <div class="order-last w-full lg:hidden">
                <HeaderSearch />
            </div>
        </div>

        <div class="mt-4 lg:border-none lg:pt-0">
            <HeaderBottomNav />
        </div>
    </header>
</template>
