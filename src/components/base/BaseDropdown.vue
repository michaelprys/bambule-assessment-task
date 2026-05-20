<script setup lang="ts">
defineProps<{
    isOpen: boolean;
    align?: 'left' | 'right';
}>();
</script>

<template>
    <Transition name="dropdown">
        <div
            v-if="isOpen"
            :class="[
                align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left',
                'absolute top-full z-100 mt-2 min-w-60 rounded-[1.75rem] bg-white shadow-[0_1.25rem_3.75rem_-0.625rem_rgba(0,0,0,0.3)]',
            ]">
            <div class="flex flex-col p-2">
                <slot />
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s cubic-bezier(0.2, 1, 0.3, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
