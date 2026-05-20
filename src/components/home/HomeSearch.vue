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
    <section id="search" class="container-center mt-13.25">
        <h2
            class="font-secondary text-base-black relative z-10 mx-auto w-max translate-y-1/2 bg-white px-4 text-center text-2xl lg:text-[1.875rem]">
            Vyhledejte dokonalý dárek
        </h2>

        <form
            class="search-form-container relative z-0 rounded-xl bg-white px-6 pt-12 pb-8 shadow-[0px_1px_32px_rgba(139,151,166,0.15)] lg:px-13 lg:pt-14 lg:pb-11.75">
            <div class="flex flex-col gap-6 xl:flex-row xl:items-center">
                <div class="flex w-full flex-1 flex-col gap-6 lg:gap-4 xl:flex-row xl:items-center">
                    <div
                        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:flex xl:items-center xl:gap-0">
                        <label
                            class="bg-base-grey-light relative flex h-13 w-full cursor-pointer items-center justify-between rounded-xl pl-4 transition-colors xl:mr-8 xl:w-55">
                            <input
                                v-model="gender"
                                type="radio"
                                value="boy"
                                name="gender"
                                class="sr-only" />

                            <div class="flex items-center gap-3">
                                <span
                                    class="bg-base-grey/50 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                    :class="{ 'bg-base-grey': gender === 'boy' }">
                                    <span
                                        v-if="gender === 'boy'"
                                        class="h-2.5 w-2.5 rounded-full bg-white"></span>
                                </span>
                                <span
                                    class="text-base-black text-[0.9375rem] font-medium whitespace-nowrap">
                                    Pro kluka
                                </span>
                            </div>

                            <img
                                class="pointer-events-none absolute right-0 h-14 w-auto shrink-0 select-none sm:-right-2 sm:h-18 xl:-right-4"
                                src="@img/search/search-boy.svg"
                                alt="Boy" />
                        </label>

                        <label
                            class="bg-base-grey-light relative flex h-13 w-full cursor-pointer items-center justify-between rounded-xl pl-4 transition-colors xl:mr-12 xl:w-50">
                            <input
                                v-model="gender"
                                type="radio"
                                value="girl"
                                name="gender"
                                class="sr-only" />

                            <div class="flex items-center gap-3">
                                <span
                                    class="bg-base-grey/50 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                    :class="{ 'bg-base-grey': gender === 'girl' }">
                                    <span
                                        v-if="gender === 'girl'"
                                        class="h-2.5 w-2.5 rounded-full bg-white"></span>
                                </span>
                                <span
                                    class="text-base-black text-[0.9375rem] font-medium whitespace-nowrap">
                                    Pro holku
                                </span>
                            </div>

                            <img
                                class="pointer-events-none absolute right-0 h-14 w-auto shrink-0 select-none sm:-right-6 sm:h-18 xl:-right-10"
                                src="@img/search/search-girl.svg"
                                alt="Girl" />
                        </label>
                    </div>

                    <div class="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-6">
                        <BaseSelect
                            v-model="age"
                            :options="ageOptions"
                            placeholder="Věk dítěte"
                            class="bg-base-grey-light h-13 w-full rounded-xl border-none xl:max-w-67" />

                        <BaseSelect
                            v-model="price"
                            :options="priceOptions"
                            placeholder="Max. cena"
                            class="bg-base-grey-light h-13 w-full rounded-xl border-none xl:max-w-67" />
                    </div>
                </div>

                <BaseButtonSecondary
                    type="submit"
                    class="h-13 w-full gap-3 rounded-xl px-7 xl:w-auto xl:shrink-0">
                    <template #icon>
                        <IconGift class="h-5 w-5" />
                    </template>
                    <span class="text-[0.9375rem] font-semibold whitespace-nowrap">
                        Vyhledat dárek
                    </span>
                </BaseButtonSecondary>
            </div>
        </form>
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
