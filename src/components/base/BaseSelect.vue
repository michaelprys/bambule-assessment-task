<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

const target = useTemplateRef('target');

onClickOutside(target, () => (isOpen.value = false));

const isOpen = ref(false);

const model = defineModel<string | number>();

defineProps<{
    options: {
        label: string;
        value: string | number;
    }[];
    placeholder?: string;
}>();
</script>

<template>
    <div class="relative flex" ref="target">
        <button
            class="flex w-full max-w-67 items-center gap-[9.55rem] p-5 whitespace-nowrap"
            type="button"
            @click="isOpen = !isOpen">
            <span class="text-base-grey">{{ placeholder }}</span>
            <IconArrow />
        </button>

        <Transition name="dropdown">
            <div
                v-if="isOpen"
                class="bg-base-grey absolute top-14 right-5 z-20 mt-2 w-48 origin-top-right rounded-md shadow-xl">
                <button
                    v-for="option in options"
                    :key="option.value"
                    type="button"
                    @click="
                        model = option.value;
                        isOpen = false;
                    "
                    class="hover:bg-base-grey-light text-base-white block h-full w-full transform px-4 py-3 text-sm transition-colors duration-300 first:rounded-t-md last:rounded-b-md">
                    {{ option.label }}
                </button>
            </div>
        </Transition>
    </div>
</template>
