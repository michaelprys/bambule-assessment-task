<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import IconGift from '@/components/icons/IconGift.vue';
import { ref } from 'vue';

const gender = ref('boy');
const age = ref('');
const price = ref('');

const ageOptions = [
    { label: '1-5', value: '1-5' },
    { label: '6-10', value: '6-10' },
    { label: '11-15', value: '11-15' },
];

const priceOptions = [
    { label: '500 Kč', value: '500' },
    { label: '1000 Kč', value: '1000' },
    { label: '2000 Kč', value: '2000' },
];
</script>

<template>
    <section id="search" class="container-center px-4 md:px-6">
        <h2
            class="font-secondary text-base-black mt-10 text-center text-2xl lg:mt-13.25 lg:text-[1.875rem]">
            Vyhledejte dokonalý dárek
        </h2>

        <div
            class="mt-7 flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-[0px_1px_32px_rgba(139,151,166,0.2)] lg:rounded-4xl lg:p-13.25 xl:flex-row xl:items-center">
            <div class="flex w-full flex-col gap-4 sm:flex-row xl:w-auto">
                <label
                    class="bg-base-grey-light flex h-14 w-full cursor-pointer items-center justify-between rounded-2xl px-4 lg:h-13 lg:w-55">
                    <input
                        v-model="gender"
                        type="radio"
                        value="boy"
                        name="gender"
                        class="sr-only" />

                    <span class="flex items-center gap-3">
                        <span
                            class="border-base-grey/20 flex h-6 w-6 items-center justify-center rounded-full border"
                            :class="gender === 'boy' ? 'bg-base-grey' : 'bg-white'">
                            <span
                                class="bg-base-white h-2.5 w-2.5 rounded-full transition"
                                :class="gender === 'boy' ? 'scale-100' : 'scale-0'" />
                        </span>
                        <span class="font-bold whitespace-nowrap">Pro kluka</span>
                    </span>

                    <img class="h-12 lg:h-[72px]" src="@img/search/search-boy.svg" alt="Boy" />
                </label>

                <label
                    class="bg-base-grey-light flex h-14 w-full cursor-pointer items-center justify-between rounded-2xl px-4 lg:h-13 lg:w-49.75">
                    <input
                        v-model="gender"
                        type="radio"
                        value="girl"
                        name="gender"
                        class="sr-only" />

                    <span class="flex items-center gap-3">
                        <span
                            class="border-base-grey/20 flex h-6 w-6 items-center justify-center rounded-full border"
                            :class="gender === 'girl' ? 'bg-base-grey' : 'bg-base-white'">
                            <span
                                class="bg-base-white h-2.5 w-2.5 rounded-full transition"
                                :class="gender === 'girl' ? 'scale-100' : 'scale-0'" />
                        </span>
                        <span class="font-bold whitespace-nowrap">Pro holku</span>
                    </span>

                    <img class="h-12 lg:h-18" src="@img/search/search-girl.svg" alt="Girl" />
                </label>

                <BaseSelect
                    v-model="age"
                    :options="ageOptions"
                    placeholder="Věk dítěte"
                    class="bg-base-grey-light h-14 w-full rounded-2xl lg:h-13" />

                <BaseSelect
                    v-model="price"
                    :options="priceOptions"
                    placeholder="Max. cena"
                    class="bg-base-grey-light h-14 w-full rounded-2xl lg:h-13" />

                <BaseButtonSecondary
                    class="flex h-14 w-full shrink-0 justify-center gap-2.5 px-6 lg:h-13 lg:w-50">
                    <template #icon>
                        <IconGift />
                    </template>
                    <span class="whitespace-nowrap">Vyhledat dárek</span>
                </BaseButtonSecondary>
            </div>
        </div>
    </section>
</template>
