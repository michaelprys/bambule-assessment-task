<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';

/*
    props
*/

defineProps<{
    title: string;
    linkText: string;
    link: string;
}>();
</script>

<template>
    <div class="flex items-center justify-between gap-4">
        <h2 class="font-secondary text-3xl">{{ title }}</h2>

        <RouterLink :to="link" class="flex items-center gap-2 underline">
            {{ linkText }}
            <IconArrow class="-rotate-90" />
        </RouterLink>
    </div>
</template>
