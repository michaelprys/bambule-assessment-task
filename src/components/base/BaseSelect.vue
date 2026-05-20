<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

const target = useTemplateRef('target');
onClickOutside(target, () => (isOpen.value = false));
const isOpen = ref(false);
const model = defineModel<string | number>();

defineProps<{
    options: { label: string; value: string | number }[];
    placeholder?: string;
}>();
</script>

<template>
    <div class="relative flex w-full lg:w-auto" ref="target">
        <button
            class="flex w-full items-center justify-between gap-4 p-4 whitespace-nowrap lg:min-w-60 lg:p-5"
            type="button"
            @click="isOpen = !isOpen">
            <span class="text-base-grey truncate">
                {{ model ? options.find((o) => o.value === model)?.label : placeholder }}
            </span>
            <IconArrow class="shrink-0" />
        </button>

        <Transition name="dropdown">
            <div
                v-if="isOpen"
                class="bg-base-white border-base-black absolute top-full right-0 z-20 mt-2 w-full origin-top-right rounded-md border shadow-xl lg:w-48">
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
            </div>
        </Transition>
    </div>
</template>
