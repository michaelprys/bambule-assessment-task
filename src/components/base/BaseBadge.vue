<script setup lang="ts">
defineProps<{
    bgColor: string;
}>();
</script>

<template>
    <div
        class="font-secondary text-base-white flex h-6.25 w-fit items-center justify-center rounded-full p-2"
        :style="{ backgroundColor: bgColor }">
        <slot />
    </div>
</template>
