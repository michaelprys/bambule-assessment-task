<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<template>
    <div class="relative ml-[2.569375rem] w-full max-w-134.5 min-w-50 flex-1">
        <input
            class="bg-base-grey-light placeholder-base-grey focus:ring-grey-light h-13 w-full rounded-xl border-none py-5.25 pl-5 leading-none transition-all duration-150 focus:ring-2 focus:outline-none"
            placeholder="Tlapková patrola, Lego, Barbie, ..." />
        <button
            class="bg-base-black absolute top-1/2 right-1.25 flex h-10.5 w-10.5 -translate-y-1/2 items-center justify-center rounded-lg active:scale-95">
            <IconSearch />
        </button>
    </div>
</template>
