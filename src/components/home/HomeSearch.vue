<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import IconGift from '@/components/icons/IconGift.vue';
import { ref } from 'vue';

const gender = ref('boy');
const age = ref('');
const price = ref('');

const ageOptions = [
    { label: '1-5 let', value: '1-5' },
    { label: '6-10 let', value: '6-10' },
    { label: '11-15 let', value: '11-15' },
];

const priceOptions = [
    { label: 'Do 500 Kč', value: '500' },
    { label: 'Do 1000 Kč', value: '1000' },
    { label: 'Do 2000 Kč', value: '2000' },
];
</script>

<template>
    <section id="search" class="container-center mt-13.25 px-4 md:px-6">
        <h2
            class="font-secondary text-base-black relative z-10 mx-auto w-max translate-y-1/2 bg-white px-4 text-center text-2xl lg:text-[1.875rem]">
            Vyhledejte dokonalý dárek
        </h2>

        <div
            class="search-form-container relative z-0 rounded-xl bg-white px-6 pt-12 pb-8 shadow-[0px_1px_32px_rgba(139,151,166,0.15)] lg:px-10 lg:pt-14 lg:pb-11.75">
            <div class="flex flex-col gap-6 md:flex-col lg:items-center xl:flex-row">
                <div
                    class="grid w-full flex-1 grid-cols-1 gap-7 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
                    <label
                        class="bg-base-grey-light flex h-13 min-w-0 cursor-pointer items-center justify-between rounded-xl pl-4 transition-colors">
                        <input
                            v-model="gender"
                            type="radio"
                            value="boy"
                            name="gender"
                            class="sr-only" />

                        <div class="flex items-center gap-3 overflow-hidden">
                            <span
                                class="bg-base-grey/50 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                :class="{ 'bg-base-grey': gender === 'boy' }">
                                <span
                                    v-if="gender === 'boy'"
                                    class="h-2.5 w-2.5 rounded-full bg-white"></span>
                            </span>
                            <span class="text-[0.9375rem] whitespace-nowrap text-black">
                                Pro kluka
                            </span>
                        </div>

                        <img
                            class="pointer-events-none h-18 w-15.75 shrink-0 select-none"
                            src="@img/search/search-boy.svg"
                            alt="Boy" />
                    </label>

                    <label
                        class="bg-base-grey-light flex h-13 min-w-0 cursor-pointer items-center justify-between rounded-xl pl-4 transition-colors">
                        <input
                            v-model="gender"
                            type="radio"
                            value="girl"
                            name="gender"
                            class="sr-only" />

                        <div class="flex items-center gap-3 overflow-hidden">
                            <span
                                class="bg-base-grey/50 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                :class="{ 'bg-base-grey': gender === 'girl' }">
                                <span
                                    v-if="gender === 'girl'"
                                    class="h-2.5 w-2.5 rounded-full bg-white"></span>
                            </span>
                            <span class="text-[0.9375rem] whitespace-nowrap text-black">
                                Pro holku
                            </span>
                        </div>

                        <img
                            class="pointer-events-none h-18 w-18.5 shrink-0 select-none"
                            src="@img/search/search-girl.svg"
                            alt="Girl" />
                    </label>

                    <BaseSelect
                        v-model="age"
                        :options="ageOptions"
                        placeholder="Věk dítěte"
                        class="bg-base-grey-light h-13 w-full rounded-xl border-none" />

                    <BaseSelect
                        v-model="price"
                        :options="priceOptions"
                        placeholder="Max. cena"
                        class="bg-base-grey-light h-13 w-full rounded-xl border-none" />
                </div>

                <BaseButtonSecondary
                    class="h-13 w-full gap-3 rounded-xl px-7 lg:w-auto lg:shrink-0">
                    <template #icon>
                        <IconGift class="h-5 w-5" />
                    </template>
                    <span class="text-[0.9375rem] whitespace-nowrap">Vyhledat dárek</span>
                </BaseButtonSecondary>
            </div>
        </div>
    </section>
</template>

<style scoped>
.search-form-container :deep(.base-select__trigger) {
    background: transparent;
    height: 3.25rem;
    width: 100%;
    border: none;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
}

.search-form-container :deep(.base-select__arrow) {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    pointer-events: none;
}

.search-form-container :deep(.base-select__value),
.search-form-container :deep(.base-select__placeholder) {
    font-size: 0.9375rem;
    font-weight: 500;
}
</style>
