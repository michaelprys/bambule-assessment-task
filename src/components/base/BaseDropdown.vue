<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void;
}>();

const trigger = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

const top = ref(0);
const left = ref(0);

function close() {
    emit('update:isOpen', false);
}

function updatePosition() {
    if (!trigger.value || !dropdown.value) return;

    const rect = trigger.value.getBoundingClientRect();

    top.value = rect.bottom + 4;
    left.value = rect.left;

    const dropdownWidth = dropdown.value.offsetWidth;
    const dropdownHeight = dropdown.value.offsetHeight;

    if (left.value + dropdownWidth > window.innerWidth - 8) {
        left.value = window.innerWidth - dropdownWidth - 8;
    }

    if (top.value + dropdownHeight > window.innerHeight - 8) {
        top.value = rect.top - dropdownHeight - 4;
    }
}

function onClickOutside(e: MouseEvent) {
    const target = e.target as Node;

    if (trigger.value?.contains(target)) return;
    if (dropdown.value?.contains(target)) return;

    close();
}

watch(
    () => props.isOpen,
    async (open) => {
        if (!open) return;

        await nextTick();

        updatePosition();

        document.addEventListener('mousedown', onClickOutside);
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition, true);
    },
);

watch(
    () => props.isOpen,
    (open) => {
        if (open) return;

        document.removeEventListener('mousedown', onClickOutside);
        window.removeEventListener('resize', updatePosition);
        window.removeEventListener('scroll', updatePosition, true);
    },
);

onBeforeUnmount(() => {
    document.removeEventListener('mousedown', onClickOutside);
    window.removeEventListener('resize', updatePosition);
    window.removeEventListener('scroll', updatePosition, true);
});
</script>

<template>
    <div>
        <div ref="trigger">
            <slot name="trigger" />
        </div>

        <Teleport to="body">
            <Transition name="dropdown">
                <div
                    v-if="isOpen"
                    ref="dropdown"
                    :style="{
                        position: 'fixed',
                        top: `${top}px`,
                        left: `${left}px`,
                        zIndex: 1000,
                    }"
                    class="bg-base-white text-base-black border-base-grey/30 min-w-60 rounded-[1.75rem] border-1 p-2 shadow-xl">
                    <slot />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition:
        opacity 0.15s ease,
        transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
