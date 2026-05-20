<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<template>
    <div class="relative w-full min-w-0 flex-1 xl:max-w-134.5">
        <div>
            <label class="sr-only" for="toys">Search toys</label>
            <input
                class="bg-base-grey-light placeholder-base-grey focus:ring-grey-light h-13 w-full rounded-xl border-none py-5.25 pr-14 pl-5 text-base leading-none transition-all duration-150 focus:ring-2 focus:outline-none"
                id="toys"
                name="toys"
                type="text"
                placeholder="Tlapková patrola, Lego, Barbie, ..." />
        </div>

        <button
            class="bg-base-black absolute top-1/2 right-1.25 flex h-10.5 w-10.5 -translate-y-1/2 items-center justify-center rounded-lg transition-transform active:scale-95">
            <IconSearch />
        </button>
    </div>
</template>
