<script setup lang="ts">
import { onClickOutside, useEventListener } from '@vueuse/core';
import { nextTick, ref, watch } from 'vue';

/*
    props, emits
*/

const props = defineProps<{
    isOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void;
}>();

/*
    state
*/

const trigger = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);
const top = ref(0);
const left = ref(0);

/*
    methods
*/

const close = () => emit('update:isOpen', false);

const updatePosition = () => {
    if (!trigger.value || !dropdown.value) return;

    const rect = trigger.value.getBoundingClientRect();

    let x = rect.left;
    let y = rect.bottom + 4;

    const { offsetWidth, offsetHeight } = dropdown.value;

    if (x + offsetWidth > innerWidth - 8) {
        x = innerWidth - offsetWidth - 8;
    }

    if (y + offsetHeight > innerHeight - 8) {
        y = rect.top - offsetHeight - 4;
    }

    left.value = x;
    top.value = y;
};

/*
    click outside
*/

onClickOutside(dropdown, (e) => {
    if (trigger.value?.contains(e.target as Node)) return;
    close();
});

/*
    listeners
*/

useEventListener(window, 'resize', updatePosition);
useEventListener(window, 'scroll', updatePosition, true);

/*
    watchers
*/

watch(
    () => props.isOpen,
    async (open) => {
        if (!open) return;

        await nextTick();
        updatePosition();
    },
);
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
                    class="bg-base-white text-base-black border-base-grey/30 min-w-60 rounded-[1.75rem] border p-2 shadow-xl">
                    <slot />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
