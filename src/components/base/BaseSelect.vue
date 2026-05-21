<script setup lang="ts">
import BaseDropdown from '@/components/base/BaseDropdown.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

/*
    state
*/

const target = useTemplateRef('target');
const isOpen = ref(false);
const model = defineModel<string | number>();

/*
    click outside
*/

onClickOutside(target, () => (isOpen.value = false));

/*
    props
*/

defineProps<{
    options: { label: string; value: string | number }[];
    placeholder?: string;
}>();
</script>

<template>
    <div class="relative w-full" ref="target">
        <button
            class="flex w-full items-center justify-between gap-4 p-4 lg:p-4"
            type="button"
            @click="isOpen = !isOpen">
            <span class="text-base-grey">
                {{ model ? options.find((o) => o.value === model)?.label : placeholder }}
            </span>
            <IconArrow :class="{ 'rotate-180': isOpen }" class="transition-transform" />
        </button>

        <BaseDropdown :is-open="isOpen" align="right">
            <button
                v-for="option in options"
                :key="option.value"
                type="button"
                @click="
                    model = option.value;
                    isOpen = false;
                "
                class="hover:bg-base-grey-light text-base-black block w-full px-4 py-3 text-left text-sm transition-colors duration-300 first:rounded-t-md last:rounded-b-md">
                {{ option.label }}
            </button>
        </BaseDropdown>
    </div>
</template>
