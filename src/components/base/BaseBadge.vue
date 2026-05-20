<script setup lang="ts">
defineProps<{
    bgColor: string;
}>();
</script>

<template>
    <div class="font-secondary text-[0.8125rem]" :style="{ backgroundColor: bgColor }">
        <slot />
    </div>
</template>
